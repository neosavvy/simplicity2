import React from 'react';
import { connect } from 'react-redux';
import Sankey from '../../shared/visualization/Sankey';

const BudgetSankey = props => (
  <Sankey nodes={props.nodes} links={props.links} altText={props.altText} />
);

const nameShape = {
  name: React.PropTypes.string,
};

const linkShape = {
  source: React.PropTypes.number,
  target: React.PropTypes.number,
  value: React.PropTypes.number,
};

BudgetSankey.propTypes = {
  nodes: React.PropTypes.arrayOf(React.PropTypes.shape(nameShape)),
  links: React.PropTypes.arrayOf(React.PropTypes.shape(linkShape)),
  altText: React.PropTypes.string,
};

BudgetSankey.defaultProps = {
  altText: 'Flow diagram',
};

const mapStateToProps = state => (
  {
    nodes: state.budget.cashFlowData.nodes,
    links: state.budget.cashFlowData.links,
  }
);

export default connect(mapStateToProps)(BudgetSankey);
