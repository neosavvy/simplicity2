import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveOrdinalFrame } from 'semiotic';
import Tooltip from '../../../shared/visualization/Tooltip';


class StatusBars extends React.Component {

  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (<div
      style={{
        textTransform: 'capitalize',
      }}
    >
      {this.props.filteredStatuses.map((datum) => {
        // for each status, make a bar chart of
        return (<div
          className="col-md-6"
          style={{ display: 'inline-block' }}
          key={datum.key}
        >
          <ResponsiveOrdinalFrame
            projection="horizontal"
            size={[300, 300]}
            responsiveWidth
            margin={{
              top: 45,
              right: 0,
              bottom: 55,
              left: 150,
            }}
            oPadding={5}
            oAccessor={d => d.status_current || 'No Status'}
            oLabel={(d) => {
              const fontSize = '0.65'
              return (
                <text
                  textAnchor="end"
                  style={{ fontSize: `${fontSize}em` }}
                >
                  {d}
                </text>
              );
            }}
            rAccessor={d => new Date(d[this.props.dateField])}
            rExtent={[
              this.props.includedDates[0],
              this.props.includedDates[this.props.includedDates.length - 1],
            ]}
            pieceIDAccessor="key"
            axis={[
              {
                orient: 'bottom',
                tickFormat: d => (
                  <text
                    textAnchor="end"
                    transform="translate(0,-10)rotate(-35)"
                    style={{ fontSize: '0.65em' }}
                  >
                    {new Date(d).toLocaleDateString(
                      'en-US',
                      { month: 'short', day: 'numeric' }
                    )}
                  </text>
                ),
                tickValues: this.props.includedDates.filter((tick, i) => i % 2 === 0),
              },
            ]}
            key={datum.key}
            data={datum.values}
            title={datum.key}
          />
        </div>
        );
      })}
      {/* <Tooltip */}
      {/*   title={this.state.tooltip.title} */}
      {/*   textLines={[{ text: this.state.tooltip.data.length }]} */}
      {/*   style={{ */}
      {/*     opacity: this.state.tooltip.opacity, */}
      {/*     position: 'absolute', */}
      {/*     left: this.state.tooltip.coords[0], */}
      {/*     top: this.state.tooltip.coords[1] */}
      {/*   }} */}
      {/* /> */}
    </div>)
  }


}

StatusBars.propTypes = {
};

StatusBars.defaultProps = {
};

export default StatusBars;
