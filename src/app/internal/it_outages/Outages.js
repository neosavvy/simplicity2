import React from 'react';
import PropTypes from 'prop-types';
import BubbleChart from './BubbleChart';
import { data } from './data';


function parseDateTime(d) {
  return new Date(`${d.Date} ${d.Time}`);
}


class Outages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
    };
  }

  render() {
    return (<div>
      <h1>IT Application Outage History</h1>
      <p>Click the boxes in the legend to show and hide applications.  Move the highlight box on the summary line chart to change the time span of data for the monthly comparison graph. </p>
      <BubbleChart
        data={data}
        colorScheme={['#B66DFF', '#DB6D00', '#006DDB', '#000000', '#FF6DB6', '#01b0b0', '#2fe12f', '#004949', '#6DB6FF', '#490092', '#920000', '#006DDB', '#490092', '#FF6DB6', '#000000', '#DB6D00', '#2fe12f', '#01b0b0', '#6DB6FF', '#FFBDDB']}
        keys={data.map(d => d.Application).filter((d, i, array) => array.indexOf(d) === i)}
        xAccessor={parseDateTime}
      />
    </div>);
  }
}

export default Outages;
