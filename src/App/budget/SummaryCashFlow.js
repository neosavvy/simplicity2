import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import BudgetSankey from './BudgetSankey';
import LoadingAnimation from '../../shared/LoadingAnimation';
import { buildCashFlowData } from './budgetActions';

const SummaryCashFlow = (props) => {
  if (props.data.loading) { // eslint-disable-line react/prop-types
    return <LoadingAnimation />;
  }
  if (props.data.error) { // eslint-disable-line react/prop-types
    return <p>{props.data.error.message}</p>; // eslint-disable-line react/prop-types
  }

  props.buildCashFlowData(props.data); // eslint-disable-line react/prop-types

  return (
    <div className="row">
      <div className="col-sm-12">
        <h3>Cash flow diagram: Revenues to expenditures</h3>
        <div style={{ marginBottom: '5px' }}>
          The chart below shows how revenue flows through the City’s key funds to the various departments. The thickness of each flow is proportional to the amount of money represented. Mouse over the rectangles and flows to see actual amounts.
        </div>
        <BudgetSankey />
      </div>
    </div>
  );
};

const nameShape = {
  name: React.PropTypes.string,
};

const linkShape = {
  source: React.PropTypes.number,
  target: React.PropTypes.number,
  value: React.PropTypes.number,
};

SummaryCashFlow.propTypes = {
  nodes: React.PropTypes.arrayOf(React.PropTypes.shape(nameShape)),
  links: React.PropTypes.arrayOf(React.PropTypes.shape(linkShape)),
};

const glBudgetCashFlowQuery = gql`
  query glBudgetCashFlowQuery {
    glBudgetCashFlowExpenses: gl_budget_cash_flow(accountType: "E") {
        account_type,
        dept_id,
        department_name,
        fund_id,
        fund_name,
        budget,
        year,
    },
    glBudgetCashFlowRevenues: gl_budget_cash_flow(accountType: "R") {
        account_type,
        category_id,
        category_name,
        fund_id,
        fund_name,
        budget,
        year,
    }
  }
`;

const SummaryCashFlowGQL = graphql(glBudgetCashFlowQuery, {})(SummaryCashFlow);

export default connect(
  null,
  dispatch => ({
    buildCashFlowData: queryData => (
      dispatch(buildCashFlowData(queryData))
    ),
  }),
)(SummaryCashFlowGQL);
