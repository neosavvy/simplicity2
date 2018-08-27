import React from 'react';
import PropTypes from 'prop-types';
import { DateTimePicker } from 'react-widgets';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import GranularDataReceivers from './GranularDataReceivers';


class GranularVolume extends React.Component {
  constructor() {
    super();

    this.state = {
      timeSpan: [new Date(2018, 7, 1), new Date()],
      dateField: 'applied_date',
    };
  }

  render() {
    Moment.locale('en');
    momentLocalizer();
    /* TODO:
      props validation
      legends
      modal pop up of individual permits
      bin by week if it's over 6 weeks, by month if it's over 1 year
      allow users to drill into permits with click/modal behavior
      do binning on server? is this going to be slow AF?
      update URL to allow bookmarking
      select more than one in permit type (etc) dropdowns
      freeze header (and make it smaller) to keep updated vs opened, date range, and permit type in view
    */

    const datePickerStyle = {
      maxWidth: '25%',
      display: 'inline-block',
      padding: '0% 0.5%',
      color: 'inherit',
    };

    return (<div className="visualization-title" >
      <h1><select
        style={{ fontSize: '0.85em' }}
        value={this.state.dateField}
        onChange={e => this.setState({ dateField: e.target.value })}
      >
        <option value="applied_date">Opened</option>
        <option value="status_date">Updated</option>
      </select> Permits
      </h1>
      <div>
        <DateTimePicker
          value={this.state.timeSpan[0]}
          onChange={value => this.setState({ timeSpan: [value, this.state.timeSpan[1]] })}
          time={false}
          style={datePickerStyle}
        /> to <DateTimePicker
          style={datePickerStyle}
          value={this.state.timeSpan[1]}
          onChange={value => this.setState({ timeSpan: [this.state.timeSpan[0], value] })}
          time={false}
        />
        <GranularDataReceivers
          timeSpan={this.state.timeSpan}
          dateField={this.state.dateField}
        />
      </div>
    </div>);
  }
}

export default GranularVolume;
