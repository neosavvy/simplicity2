import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { nest } from 'd3-collection';
import { ResponsiveOrdinalFrame } from 'semiotic';
import { color } from 'd3-color';
import {
  colorScheme,
  groupHierachyOthers,
  histogramFromHierarchical,
  GET_PERMITS,
  openedOnlineRule,
  splitOrdinalByBool,
} from './granularUtils';
import LoadingAnimation from '../../../shared/LoadingAnimation';
import PermitTypeMenus from './PermitTypeMenus';
import PermitVolCirclepack from './PermitVolCirclepack';
import Tooltip from '../../../shared/visualization/Tooltip';
import VolumeHistogram from './VolumeHistogram';


class GranularDataReceivers extends React.Component {
  constructor() {
    super();

    this.state = {
      hierarchyLevels: [
        { name: 'permit_type', selectedCat: null },
        { name: 'permit_subtype', selectedCat: null },
        { name: 'permit_category', selectedCat: null },
      ],
    };

    this.onMenuSelect = this.onMenuSelect.bind(this);
  }

  timeBuckets() {
    const includedDates = [];
    const oneDayMilliseconds = (24 * 60 * 60 * 1000);
    let dateToAdd = new Date(this.props.timeSpan[0]).getTime();
    const lastDate = new Date(this.props.timeSpan[1]).getTime();
    while (dateToAdd <= lastDate) {
      includedDates.push(new Date(dateToAdd));
      dateToAdd += oneDayMilliseconds;
    }
    return includedDates;
  }

  onMenuSelect(e, levelIndex) {
    const newVal = e.target.value === 'null' ? null : e.target.value;
    const newLevels = [...this.state.hierarchyLevels];
    newLevels[levelIndex].selectedCat = newVal;
    for (let changeIndex = newLevels.length - 1; changeIndex > levelIndex; changeIndex--) {
      newLevels[changeIndex].selectedCat = null;
    }
    this.setState({ hierarchyLevels: newLevels });
  }

  render() {
    return (<Query
      query={GET_PERMITS}
      variables={{
        date_field: this.props.dateField,
        after: this.props.timeSpan[0],
        before: this.props.timeSpan[1],
      }}
    >
      {({ loading, error, data }) => {
        if (loading) return <LoadingAnimation />;
        if (error) return <div>Error :( </div>;

        let firstIndexUnselected = this.state.hierarchyLevels.map(l => l.selectedCat).indexOf(null);
        if (firstIndexUnselected === -1) {
          // Hierarchy is just key: whatever, values: filteredData
          firstIndexUnselected = this.state.hierarchyLevels.length - 1;
        }

        // Current data separated into groups
        const bigNest = nest();
        for (let i = 0; i <= firstIndexUnselected; i++) {
          bigNest.key(d => d[this.state.hierarchyLevels[i].name]);
        }

        const wholeHierarchy = bigNest.object(data.permits);

        let filteredData = wholeHierarchy;
        this.state.hierarchyLevels.forEach((level, i) => {
          if (level.selectedCat) { filteredData = filteredData[level.selectedCat]; }
          if (level.selectedCat && i === this.state.hierarchyLevels.length - 1) {
            const rObj = {};
            rObj[level.selectedCat] = filteredData;
            filteredData = rObj;
          }
        });

        // Named entries hierarchy because it's the equivalent of nest().entries(data)
        let entriesHierarchy = Object.keys(filteredData).map(key => ({
          key,
          values: filteredData[key],
          value: filteredData[key].length,
        })).sort((a, b) => b.value - a.value);

        entriesHierarchy = groupHierachyOthers(entriesHierarchy);

        // Determine what colors each key within that hierarchy should be
        const nodeColors = { root: 'none' };
        const theseColors = firstIndexUnselected % 2 !== 0 ? colorScheme.slice().reverse() : colorScheme;
        entriesHierarchy.forEach((hierarchyLevel, i) => {
          nodeColors[hierarchyLevel.key] = theseColors[i];
        });

        const includedDates = this.timeBuckets();
        const histogramData = histogramFromHierarchical(
          data.permits,
          entriesHierarchy,
          includedDates,
        );

        const openedOnline = splitOrdinalByBool(histogramData, openedOnlineRule, 'openedOnline');

        return (<div>
          <div id="controls-n-summary" className="row">
            <PermitTypeMenus
              onSelect={this.onMenuSelect}
              parentHierarchyLevels={this.state.hierarchyLevels}
              wholeHierarchy={wholeHierarchy}
            />
            <div className="col-md-9">
              <h2>Daily</h2>
              <VolumeHistogram
                data={histogramData}
                nodeColors={nodeColors}
              />
              {/* Checkbox legend - more like checkboxes-- only show top 3 - 5 by volume by default */}
            </div>
            <div className="col-md-3 granularVolCirclepack">
              <h2>Total</h2>
              <PermitVolCirclepack
                data={{ key: 'root', children: entriesHierarchy }}
                colorKeys={nodeColors}
              />
            </div>
          </div>
          <div
            id="openClosedIssued"
            className="row"
          >
            <h2>Status Distribution by {this.state.dateField  === 'applied_date' ? 'Opened' : 'Updated'} Date</h2>
            <div
              style={{
                padding: '0 1%',
                textTransform: 'capitalize',
              }}
            >
              {entriesHierarchy.map((datum) => {
                // TODO:
                // roll them into other if there are more than 5
                // click to pop up modal
                // tooltip
                return (<div
                  className="col-md-4"
                  style={{ display: 'inline-block' }}
                  key={datum.key}
                >
                  <ResponsiveOrdinalFrame
                    projection="horizontal"
                    size={[300, 325]}
                    responsiveWidth
                    margin={{
                      top: 40,
                      right: 0,
                      bottom: 40,
                      left: 90,
                    }}
                    oPadding={5}
                    oAccessor={d => d.status_current || 'No Status'}
                    oLabel={(d) => {
                      const fontSize = 1 - (0.125 * d.split(' ').length);
                      return (
                        <text
                          textAnchor="end"
                          transform="rotate(-35)"
                          style={{ fontSize: `${fontSize}em` }}
                        >
                          {d}
                        </text>
                      );
                    }}
                    summaryType={{ type: 'boxplot', amplitude: new Date() }}
                    summaryStyle={{
                      fill: nodeColors[datum.key],
                      stroke: nodeColors[datum.key],
                      fillOpacity: 0.65,
                    }}
                    rAccessor={d => new Date(d[this.props.dateField])}
                    rExtent={[
                      // new Date(includedDates[0]).setDate(includedDates[0].getDate() - 1),
                      includedDates[0],
                      includedDates[includedDates.length - 1],
                    ]}
                    pieceIDAccessor="key"
                    axis={[
                      {
                        orient: 'bottom',
                        tickFormat: d => (
                          <text
                            textAnchor="end"
                            transform="rotate(-35)"
                            style={{ fontSize: '0.65em' }}
                          >
                            {new Date(d).toLocaleDateString(
                              'en-US',
                              { month: 'short', day: 'numeric' }
                            )}
                          </text>
                        ),
                        tickValues: includedDates.filter((tick, i) => i % 2 === 0),
                      },
                    ]}
                    key={datum.key}
                    data={datum.values}
                    title={datum.key}
                    hoverAnnotation
                    tooltipContent={(d) => {
                      // Add text line that says "median date received is ____"
                      return (<Tooltip
                        title={`${d.column.name} Total: ${d.summary.length}`}
                      />);
                    }}
                    customClickBehavior={d => console.log(d)}
                  />
                </div>
                );
              })}
            </div>
          </div>
          <div id="taskVol">
            <h2>Tasks</h2>
          </div>
          <div id="inspections">
            <h2>Inspections</h2>
          </div>
          <div id="percentOnline">
            <h2>Online vs In Person</h2>
            {/* for each permit type, return a histogram showing opened online, opened in person,  */}
            <div
              style={{
                padding: '0 1%',
                textTransform: 'capitalize',
              }}
            >
              {entriesHierarchy.map((datum) => {
                return (<div
                  style={{ display: 'inline-block' }}
                  key={datum.key}
                >
                  <ResponsiveOrdinalFrame
                    size={[185, 185]}
                    // responsiveWidth
                    margin={{
                      top: 40,
                      right: 10,
                      bottom: 30,
                      left: 25,
                    }}
                    oPadding={1}
                    oAccessor="binStartDate"
                    rAccessor="count"
                    type="bar"
                    pieceIDAccessor="key"
                    axis={[
                      {
                        orient: 'left',
                        tickFormat: d => (
                          <text
                            textAnchor="end"
                            style={{ fontSize: '0.70em' }}
                          >
                            {d}
                          </text>
                        ),
                      },
                    ]}
                    hoverAnnotation
                    tooltipContent={(d) => {
                      const pieces = d.type === 'column-hover' ? d.pieces : [d.data];
                      const title = new Date(pieces[0].binStartDate).toLocaleDateString('en-US');

                      const textLines = pieces.map(piece => ({
                        text: `${piece.openedOnline ? 'Online' : 'In Person'}: ${piece.count}`,
                        color: nodeColors[piece.key],
                      })).reverse();

                      return (<Tooltip
                        title={title}
                        textLines={textLines}
                      />);
                    }}
                    data={openedOnline.filter(d => d.key === datum.key)}
                    title={datum.key}
                    style={d => {
                      return {
                        fill: d.openedOnline ? nodeColors[datum.key] : color(nodeColors[datum.key]).brighter(2),
                      };
                    }}
                  />
                </div>);
              })}
            </div>
          </div>
          <div id="permitFees">
            <h2>Fees</h2>
          </div>
        </div>);
      }
      }
    </Query>);
  }
}

export default GranularDataReceivers;
