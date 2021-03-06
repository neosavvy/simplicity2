import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import LoadingAnimation from '../LoadingAnimation';


const BigNumber = props => (
  <Query
    query={props.query}
    variables={props.queryVars}
  >
    {({ loading, error, data }) => {
      if (loading) return <LoadingAnimation size="small" />
      let val = ''
      if (error) {
        val = 'Error'
      }
      val = props.aggregateFunction(data)
      return (<div className='card-item'>
        <div
          className='topic-card'
          style={{
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '3em'
            }}
          >
            {val}
          </div>
          <div>
            {props.label}
          </div>
        </div>
      </div>)
    }}
  </Query>
);

BigNumber.propTypes = {
  // query: PropTypes.object,
  label: PropTypes.string,
}

BigNumber.defaultProps = {
  // query: '',
  label: '',
}

export default BigNumber;
