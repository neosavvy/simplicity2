/**
*
* Login
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { user } = this.props;
    const linkName = (user.loggedIn) ? <FormattedMessage {...messages.logoutLabel} /> : <FormattedMessage {...messages.loginLabel} />;

    if (this.props.user.loggedIn) {
      return (
        <div>
          <a href="." onClick={(e) => { e.preventDefault(); this.props.user.logout(this.props.dispatch); }}>
            { linkName }
          </a>
        </div>
      );
    }

    return (
      <div>
        <a href="login">
          { linkName }
        </a>
      </div>
    );
  }
}

Login.propTypes = {
  user: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

export default Login;
