import gql from 'graphql-tag';
import { histogram } from 'd3-array';
import { timeDay, timeMonday, timeMonth } from 'd3-time';

export const colorScheme = [
  '#490092',
  '#920000',
  '#B66DFF',
  '#DB6D00',
  '#006DDB',
  '#FF6DB6',
  '#6DB6FF',
];

export function multiplesTitle(node) {
  const slicedHeritage = node.heritage.slice(1)
  const selectedActiveLength = node.selectedActiveValues.length;
  const allUnnestedLength = node.allUnnestedValues.length;
  let parentheticalFraction = '';
  if (selectedActiveLength !== allUnnestedLength) {
    parentheticalFraction = ` (${selectedActiveLength} of ${allUnnestedLength})`;
  }
  return slicedHeritage.length > 0 ?
    `${node.heritage.slice(1).join(' > ')} > ${node.key}${parentheticalFraction}`
    : `${node.key}${parentheticalFraction}`;
}

export function whichD3TimeFunction(timeExtent) {
  const oneDayMilliseconds = (24 * 60 * 60 * 1000);
  const firstTime = new Date(timeExtent[0]).getTime();
  const lastTime = new Date(timeExtent[1]).getTime();
  const daySpan = (lastTime - firstTime) / oneDayMilliseconds;
  if (daySpan <= 20) {
    return timeDay
  } else if (daySpan > 20 && daySpan / 7 <= 20) {
    return timeMonday
  } else if (daySpan / 7 > 20) {
    return timeMonth
  }
}

export function dateDisplayOptsFuncMaker(timeExtent) {
  const timeFunc = whichD3TimeFunction(timeExtent);
  let dateOpts = {
    // timeZone: 'America/New_York',
    // why is this messed up?
  }
  if (timeFunc === timeDay || timeFunc === timeMonday) {
    dateOpts.day = 'numeric';
    dateOpts.month = 'short';
  } else if (timeFunc === timeMonth) {
    dateOpts.month = 'short';
    dateOpts.year = 'numeric';
  }
  return function(inputDate, longTitle = false) {
    let returnString = timeFunc.round(inputDate)
      .toLocaleDateString('en-US', dateOpts)
    if (timeFunc === timeMonday && longTitle) {
      returnString = `Week of ${returnString}`
    }
    return returnString
  }
}

export function groupStatuses(data) {
  // Issued/Finaled/Closed
  const done = [
    'Partial Issued',
    'Reissued',
    'Issued',
    'Sent',
    'Closed',
    'Issued CA',
    'Finaled',
    'Record Closed',
    'Approved',
  ];
  // Plan Check/In Review
  const inReview = [
    'Plan Check',
    'Plan Check 2',
    'In Review',
  ];
  // Application Phase
  const appPhase = [
    'Application Received',
    'Application Submitted',
    'Submittal Required',
  ]

  return data.map((d) => {
    const rVal = Object.assign({}, d)
    if (done.includes(d.status_current)) {
      rVal.status_current = 'Issued/Finaled/Closed'
    } else if (appPhase.includes(d.status_current)) {
      rVal.status_current = 'Application Phase'
    } else if (inReview.includes(d.status_current)) {
      rVal.status_current = 'Plan Check/In Review'
    }
    return rVal;
  });
}

export const openedOnlineRule = inputDatum =>
  inputDatum.created_by.includes('PUBLICUSER')
    || inputDatum.created_by === 'TALLEY'
    || inputDatum.created_by === 'CSHORT';


export function getIncludedDates(timeSpan) {
  const timeFunc = whichD3TimeFunction(timeSpan);
  timeSpan[1] = new Date(timeSpan[1]).getTime() + 86400
  return timeFunc.range(timeSpan[0], timeFunc.ceil(timeSpan[1]))
}

export function getHistDomain(timeSpan) {
  const timeFunc = whichD3TimeFunction(timeSpan);
  return [timeSpan[0], timeFunc.ceil(timeSpan[1])];
}

export function stackedHistogramFromNodes(nodes, timeSpan) {
  const includedDates = getIncludedDates(timeSpan)
  const histFunc = histogram()
    .value(d => new Date(d.applied_date))
    .thresholds(includedDates)
    .domain(getHistDomain(timeSpan));
  return [].concat(...nodes
    .map(node => histFunc(node.selectedActiveValues)
      .slice(0, -1)
      .map(d => ({
        key: node.key,
        count: d.length,
        binStartDate: d.x0,
        values: d || [],
        color: node.color,
        othered: node.othered,
        heritage: node.heritage,
      }))
    )
  )
}

export function splitOrdinalByBool(inputData, matchTestFunc, nameTrue) {
  const splitOrdinal = [];
  inputData.forEach((datum) => {
    const matchy = Object.assign({}, datum);
    matchy[nameTrue] = true;
    const notMatchy = Object.assign({}, datum);
    notMatchy[nameTrue] = false;

    matchy.values = [];
    notMatchy.values = [];

    datum.values.forEach(datumValue => (matchTestFunc(datumValue) ?
      matchy.values.push(datumValue)
      : notMatchy.values.push(datumValue)));

    matchy.count = matchy.values.length;
    notMatchy.count = notMatchy.values.length;

    splitOrdinal.push(notMatchy);
    splitOrdinal.push(matchy);
  });

  return splitOrdinal;
}

export const GET_WORKFLOW_TASKS = gql`
query getTasksQuery($after: String) {
  permit_tasks(after: $after) {
    permit_number
    permit_group
    permit_type
    permit_subtype
    permit_category
    process_code
    task
    task_status
    current_status_date
    step_number
    relation_sequence_id
    parent_task_name
    user_name
    user_id
    user_department
    due_date
    record_date
    comments
    is_completed
    is_active
    assigned_date
    assigned_user
    assigned_department
    process_history_sequence_number
    record_id
  }
}`

export const GET_WORKFLOW_TASKS_FOR_COUNTING = gql`
  query getTasksQuery($after: String) {
    permit_tasks(after: $after) {
      permit_number
      permit_group
    }
  }
`

export const GET_PERMITS_FOR_COUNTING = gql`
  query getPermitsQuery($after: String) {
    permits(after: $after) {
        applied_date
        permit_category
        permit_group
    }
  }
`;

export const GET_PERMITS = gql`
  query getPermitsQuery($date_field: String!, $after: String, $before: String) {
    permits(date_field: $date_field, after: $after, before: $before) {
        applicant_name
        applied_date
        permit_category
        permit_description
        permit_group
        permit_number
        permit_subtype
        permit_type
        status_current
        status_date
        created_by
        building_value
        job_value
        total_project_valuation
        total_sq_feet
        fees
        paid
        balance
        invoiced_fee_total
        address
        comments {
          comment_seq_number
          comment_date
          comments
        }
    }
  }
`;
