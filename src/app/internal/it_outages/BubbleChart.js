import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveXYFrame } from 'semiotic';
import { scaleLinear } from 'd3-scale';
import { timeMonth } from 'd3-time';
import Tooltip from '../../../shared/visualization/Tooltip';
import { dollarFormatter } from '../../../shared/visualization/visUtilities';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// TODO: where else should d3-time and timemonth be used rather than some hacky method?

class BubbleChart extends React.Component {
  constructor(props) {
    super(props);

    this.cleanedData = this.props.data.map((d, i) => {
      const rVal = Object.assign({}, d);
      rVal.color = this.props.colorScheme[i];
      return rVal;
    });
    this.allDataByType = this.getallDataByType(this.cleanedData);

    this.years = this.cleanedData
      .map(d => this.props.xAccessor(d).getFullYear())
      .filter((value, index, self) => self.indexOf(value) === index)
      .concat([new Date().getFullYear() + 1])
      .map(d => new Date(+d, 0));


    const maxSeverity = this.cleanedData.sort((a, b) => b['Severity?'] - a['Severity?'])[0]['Severity?'];

    this.radiusFunc = scaleLinear()
      .range([3, 25])
      .domain([0, maxSeverity]);

    this.state = {
      activeKeys: this.props.keys,
      brushedData: this.cleanedData,
      brushExtent: [this.years[this.years.length - 2], this.years[this.years.length - 1]],
      hover: null,
    };

    this.brushEnd = this.brushEnd.bind(this);
  }

  getByTypeAndYear(inputData) {
    const returnData = {};
    this.props.keys.forEach((volKey, i) => {
      returnData[volKey] = {};
      inputData[volKey].forEach((d) => {
        const year = this.props.xAccessor(d).getFullYear();
        if (!returnData[volKey][year]) {
          returnData[volKey][year] = [];
        }
        returnData[volKey][year].push(d);
      });
    });
    return returnData;
  }

  getallDataByType(inputData) {
    const returnObject = {};
    this.props.keys.forEach((k) => {
      returnObject[k] = inputData.filter(d => d.Application === k);
    });
    return returnObject;
  }

  brushEnd(e) {
    let newExtent;
    if (e) {
      // snap brush
      newExtent = e.map(timeMonth.round);
      if (newExtent[0] >= newExtent[1]) {
        newExtent[0] = timeMonth.floor(newExtent[0]);
        newExtent[1] = timeMonth.ciel(newExtent[1]);
      }
    } else {
      newExtent = [0, 0];
    }
    this.setState({
      brushExtent: newExtent,
      brushedData: e ? this.cleanedData.filter(d => this.props.xAccessor(d) >= newExtent[0] && this.props.xAccessor(d) <= newExtent[1]) : this.cleanedData,
    });
  }

  handleLegendSelect(key, activeNow) {
    this.setState({
      activeKeys: activeNow ?
        this.state.activeKeys.filter(thisKey => thisKey !== key) :
        this.state.activeKeys.concat([key]),
    });
  }

  render() {
    let currentLines = [];
    const currentLinesBrushable = [];

    const filteredDataByType = this.getallDataByType(this.state.brushedData);
    const byTypeAndYear = this.getByTypeAndYear(filteredDataByType);

    this.state.activeKeys.forEach((type) => {
      currentLinesBrushable.push({
        coordinates: this.allDataByType[type],
      });
      currentLines = currentLines.concat(Object.values(byTypeAndYear[type]).map(d => ({
        type,
        coordinates: d,
        year: this.props.xAccessor(d[0]).getFullYear(),
      })));
    });

    return (<div style={{ width: '100%', textAlign: 'center' }} className="permitVol">
      <div style={{ margin: '2% 10%', whiteSpace: 'wrap' }}>
        {this.props.keys.map((key, i) => {
          const activeNow = this.state.activeKeys.findIndex(type => type === key) >= 0;
          return (<div
            role="checkbox"
            aria-checked={activeNow}
            aria-label={key}
            tabIndex="0"
            style={{
              display: 'inline-block',
              padding: '0 1%',
            }}
            key={key + i}
            onKeyDown={(e) => {
              if (e.key === ' ') {
                e.preventDefault();
                this.handleLegendSelect(key, activeNow);
              }
            }}
            onClick={() => this.handleLegendSelect(key, activeNow)}
          >
            <div
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              <svg
                height="15"
                width="15px"
                style={{
                  margin: '0 5',
                }}
              >
                <rect
                  height="100%"
                  width="100%"
                  style={{
                    fill: activeNow ? this.props.colorScheme[i] : 'white',
                    stroke: this.props.colorScheme[i],
                    strokeWidth: '3',
                    cursor: 'pointer',
                    fillOpacity: 0.75,
                  }}
                >
                </rect>
              </svg>
              <span
                className={`volKeyButton ${activeNow ? 'active' : 'inactive'}`}
                style={{

                }}
              >
                {key}
              </span>
            </div>
          </div>);
        })}
      </div>
      <ResponsiveXYFrame
        title="Volume Summary"
        responsiveWidth
        size={[1000, 130]}
        margin={{
          top: 40,
          bottom: 60,
          left: 50,
          right: 40,
        }}
        lines={currentLinesBrushable}
        lineType="line"
        xAccessor={this.props.xAccessor}
        yAccessor={this.props.yAccessor}
        yExtent={[0, undefined]}
        xExtent={[this.years[0], this.years[this.years.length - 1]]}
        lineStyle={d => ({ stroke: d.coordinates[0].color, strokeWidth: 2 })}
        axes={[
          {
            orient: 'bottom',
            tickFormat: d => new Date(d).getFullYear(),
            tickValues: this.years,
          },
        ]}
        interaction={{
          end: this.brushEnd,
          brush: 'xBrush',
          extent: this.state.brushExtent,
        }}
      />
      <ResponsiveXYFrame
        title="Monthly Comparison"
        responsiveWidth
        size={[1000, 400]}
        margin={{
          top: 40,
          left: 60,
          right: 40,
          bottom: 70,
        }}
        lines={currentLines}
        lineType="line"
        xAccessor={d => this.props.xAccessor(d).getMonth()}
        yAccessor={this.props.yAccessor}
        xExtent={[0, 11]}
        yExtent={[0, undefined]}
        axes={[
          {
            orient: 'bottom',
            ticks: 12,
            tickFormat: d => months[d],
          },
          {
            orient: 'left',
            ticks: 5,
            label: 'Hours Out',
          },
        ]}
        lineStyle={(d) => {
          const hovered = this.state.hover &&
            d.year === this.state.hover.year &&
            d.type === this.state.hover.parentKey;
          return {
            stroke: d.coordinates[0].color,
            strokeWidth: hovered ? 2.5 : 0.5,
          };
        }}
        showLinePoints
        customPointMark={(d) => {
          return (<circle
            r={this.radiusFunc(d.d['Severity?'])}
          />);
        }}
        pointStyle={(d) => {
          console.log(d)
          const hovered = this.state.hover &&
            d.year === this.state.hover.year &&
            d.monthInt === this.state.hover.monthInt &&
            d.parentKey === this.state.hover.parentKey;
          return {
            stroke: d.color,
            strokeWidth: 2.5,
            strokeOpacity: hovered ? 1 : 0,
            fillOpacity: 0.75,
            fill: d.color,
          };
        }}
        hoverAnnotation
        customHoverBehavior={(d) => {
          if (d) {
            this.setState({
              hover: {
                year: d.year,
                parentKey: d.parentKey,
                monthInt: d.monthInt,
              },
            });
          } else {
            this.setState({
              hover: null,
            });
          }
        }}
        tooltipContent={(d) => {
          console.log(d)
        }}
      />
    </div>);
  }
}

BubbleChart.propTypes = {
  colorScheme: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object),
  keys: PropTypes.arrayOf(PropTypes.string),
  xAccessor: PropTypes.func,
  yAccessor: PropTypes.func,
};

BubbleChart.defaultProps = {
  colorScheme: ['red'],
  data: [],
  keys: [],
  xAccessor: d => d.date,
  yAccessor: d => d['Hours Down?'],
};

export default BubbleChart;
