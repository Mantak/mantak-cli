import React, { PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

import { browserHistory } from 'react-router';

class _Form extends React.Component {
  loginWithGithub() {
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'public_repo']
    }, function (err) {
      if (err)
        Session.set('errorMessage', err.reason || 'Unknown error');
    });
  }
  loginWithWeibo() {
    Meteor.loginWithWeibo(function(err, res) {
      console.log('login');
    });
  }
  loginWithWechat() {
    Meteor.loginWithWeChat(function(err, res) {
      console.log('login');
    });
  }
  render() {
    const inputStyle = { width: '100%'};
    const { handleSubmit, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <Field name="username" component={TextField} hintText="用户名/邮箱" style={inputStyle}/>
        <Field name="password" component={TextField} hintText="密码" style={inputStyle}  type="password"/>
        <RaisedButton
          type="submit"
          label="登录"
          primary={true}
          style={{marginTop: '10px', marginBottom: '10px', width: '100%'}}
          disabled={submitting}
        />
        <RaisedButton
          icon={<FontIcon className="icon-github" />}
          label="使用github登录"
          primary={true}
          style={{marginBottom: '10px', width: '100%'}}
          onClick={this.loginWithGithub}
        />
        <RaisedButton
          icon={<FontIcon className="icon-weibo" />}
          label="使用微博登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          primary={true}
          style={{marginBottom: '10px', width: '100%'}}
          onClick={this.loginWithWeibo}
        />
        <RaisedButton
          icon={<FontIcon className="icon-wechat" />}
          label="使用微信登录 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          primary={true}
          style={{marginBottom: '10px', width: '100%'}}
          onClick={this.loginWithWechat}
        />
      </form>
    );
  }
}
_Form.propTypes = {
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,
};

_FormComponent = reduxForm({
  form: 'loginForm'
})(_Form);

export default _FormComponent;
