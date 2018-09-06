import React from 'react';
import PropTypes from 'prop-types';
import BubbleChart from './XYBubbleChart';
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
    // good to bad gradient of #b3daff to #b30000 is colorblind safe
    // TODO: make the "application down" a tooltip
    // make the severity the color
    // make the legend reflect the color scheme
    // remove volume summary
    // make size also the number of hours
    // Planned outages as annotations-- black dots?

    // use xyframe and make xaxis dummy based on


    // Assign colors to data here


    return (<div>
      <h1>IT Application Outage History</h1>
      <BubbleChart
        data={data.filter(d => !isNaN(+d['Hours Down?']))}
        xAccessor={parseDateTime}
        yAccessor={d => d['Hours Down?']}
      />
    </div>);
  }
}

export default Outages;
