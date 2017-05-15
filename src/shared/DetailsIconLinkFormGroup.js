import React from 'react';
import { Link } from 'react-router';
import styles from './detailsIconLinkFormGroup.css';

const DetailsIconLinkFormGroup = props => (
  <div>
    <Link to={props.href} title={props.title}>
      <div className={['form-group', styles.detailsIconLinkFormGroup].join(' ')}>
        <i className={['fa fa-', props.icon].join('')}></i>
        <div className={styles.labelClass}>{props.label}</div>
      </div>
    </Link>
  </div>
);

DetailsIconLinkFormGroup.propTypes = {
  label: React.PropTypes.string,
  icon: React.PropTypes.string,
  href: React.PropTypes.string,
  title: React.PropTypes.string,
};

DetailsIconLinkFormGroup.defaultProps = {
  label: '',
  icon: '',
  href: 'www.ashevillenc.gov',
  title: 'City of Asheville Website',
};

export default DetailsIconLinkFormGroup;