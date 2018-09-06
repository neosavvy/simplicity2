import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveXYFrame } from 'semiotic';
import { scaleLinear } from 'd3-scale';
import { timeMonth } from 'd3-time';
import Tooltip from '../../../shared/visualization/Tooltip';


class XYBubbleChart extends React.Component {
  constructor(props) {
    super(props);

    this.radiusFunc = scaleLinear()
      .range([3, 25])
      .domain([0, 3]);
      // USE MAX SEVERITY INSTEAD

    // Eventually add the brush/timelie back in
    // Default to last quarter, but have all time data available
    // this.state = {
    //   brushedData: this.cleanedData,
    //   brushExtent: [this.years[this.years.length - 2], this.years[this.years.length - 1]],
    //   hover: null,
    // };

    // this.brushEnd = this.brushEnd.bind(this);
  }
  //
  // brushEnd(e) {
  //   let newExtent;
  //   if (e) {
  //     // snap brush
  //     newExtent = e.map(timeMonth.round);
  //     if (newExtent[0] >= newExtent[1]) {
  //       newExtent[0] = timeMonth.floor(newExtent[0]);
  //       newExtent[1] = timeMonth.ciel(newExtent[1]);
  //     }
  //   } else {
  //     newExtent = [0, 0];
  //   }
  //   this.setState({
  //     brushExtent: newExtent,
  //     brushedData: e ? this.cleanedData.filter(d => this.props.xAccessor(d) >= newExtent[0] && this.props.xAccessor(d) <= newExtent[1]) : this.cleanedData,
  //   });
  // }

  render() {

    // Receive data that has color already assigned

    let currentLines = [];

    const filteredDataByType = this.getallDataByType(this.state.brushedData);
    const byTypeAndYear = this.getByTypeAndYear(filteredDataByType);

    console.log(filteredDataByType)
    console.log(byTypeAndYear)


    return (<div style={{ width: '100%', textAlign: 'center' }} className="permitVol">
      <div style={{ margin: '2% 10%', whiteSpace: 'wrap' }}>
        {/* {this.props.keys.map((key, i) => {
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
        })} */}
      </div>
      {/* <ResponsiveXYFrame
        title="Volume Summary"
        responsiveWidth
        size={[1000, 130]}
        margin={{
          top: 40,
          bottom: 60,
          left: 50,
          right: 40,
        }}
        // lines={currentLinesBrushable}
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
      /> */}
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

XYBubbleChart.propTypes = {
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
