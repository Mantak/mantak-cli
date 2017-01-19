import { Accounts } from 'meteor/accounts-base';

import React, { PropTypes } from 'react';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import Alert from 'react-s-alert';


import ResetPasswordForm from '../components/login/reset_password_form';


class _Page extends React.Component {
  handleResetPassword(values) {
    const newPassword = values.password;
    const token = this.props.params.token;
    Accounts.resetPassword(token, newPassword, function(err) {
      if (err) {
        Alert.warning(err.reason, {
          effect: 'flip',
          position: 'bottom'
        });
      } else {
        Alert.warning('成功修改密码', {
          effect: 'flip',
          position: 'bottom'
        });
      }
    });
  }
  render() {
    return (
      <div id="login" className="up">
        <Alert stack={{limit: 3}} />
        <div className="module form-module">
          <div className="form">
            <ResetPasswordForm onSubmit={this.handleResetPassword.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

_Page.propTypes = {
  params: PropTypes.object,
};
export default _Page;
