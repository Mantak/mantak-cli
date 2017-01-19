import { Accounts } from 'meteor/accounts-base';

import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import Alert from 'react-s-alert';


import LoginIcon from 'material-ui/svg-icons/social/person';
import RegisterIcon from 'material-ui/svg-icons/social/person-add';
import ForgotIcon from 'material-ui/svg-icons/action/lock-open';
import FlatButton from 'material-ui/FlatButton';

import LoginForm from '../components/login/login_form';
import RegisterForm from '../components/login/register_form';
import ForgotPasswordForm from '../components/login/forgot_password_form';


class _Page extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: 'login',
      error: false,
    };
  }
  componentDidMount() {
    // 去掉右面滚动条
    $('body').css('overflow', 'hidden');
  }
  changeTab(value) {
    this.setState({tab: value, error: false});
  }

  handleLogin({username, password}) {
    Meteor.loginWithPassword(username, password, (err) => {
      if (err) {
        this.setState({
          error: '用户名或密码不正确'
        });
      } else {
        const path = this.props.location.query.redirect_to || '/';
        browserHistory.push(path);
      }
    });
  }
  handleRegister(values) {
    const user = {};
    user.email = values.email;
    user.username = values.username;
    user.password = values.origin_password;
    const that = this;
    Accounts.createUser(user, function(err) {
      if (err) {
        that.setState({
          error: err.reason
        });
      } else {
        Meteor.call( 'User.sendVerificationLink', ( error, response ) => {
          if ( error ) {
            Alert.warning(error.reason, {
              effect: 'flip',
              position: 'bottom'
            });
          } else {
            Alert.warning('确认邮件已发送到您的邮箱，请注意查收', {
              effect: 'flip',
              position: 'bottom'
            });
          }
        });
        browserHistory.push('/profile');
      }
    });
  }
  handleForgotPassword(values) {
    const email = values.email;
    const options = {email};
    Accounts.forgotPassword(options, function(err) {
      if (err) {
        Alert.warning(err.reason, {
          effect: 'flip',
          position: 'bottom'
        });
      } else {
        Alert.warning('邮件已发送到您的邮箱，请注意查收', {
          effect: 'flip',
          position: 'bottom'
        });
      }
    });
  }

  getTitle() {
    switch (this.state.tab) {
      case 'register':
        return '注 册';
      case 'forgot':
        return '找回密码';
      default:
        return '登 录';
    }
  }
  getForm() {
    switch (this.state.tab) {
      case 'register':
        return <RegisterForm onSubmit={this.handleRegister.bind(this)}/>;
      case 'forgot':
        return <ForgotPasswordForm onSubmit={this.handleForgotPassword.bind(this)}/>;
      default:
        return <LoginForm onSubmit={this.handleLogin.bind(this)}/>;
    }
  }
  getIcon() {
    switch (this.state.tab) {
      case 'register':
        return (<div className="toggle click" onClick={()=> this.changeTab('login')}>
                  <RegisterIcon style={{color: 'white', marginTop: '6px'}}/>
                </div>);
      case 'forgot':
        return (<div className="toggle click" onClick={()=> this.changeTab('login')}>
                  <ForgotIcon style={{color: 'white', marginTop: '6px'}}/>
                </div>);
      default:
        return (<div className="toggle click" onClick={()=> this.changeTab('register')}>
                 <LoginIcon  style={{color: 'white', marginTop: '6px'}}/>
                </div>);
    }
  }
  getButton() {
    if (this.state.tab === 'login') {
      return <FlatButton label="注册" primary={true} onClick={()=> this.changeTab('register')}/>;
    }
    return <FlatButton label="登录" primary={true} onClick={()=> this.changeTab('login')}/>;
  }

  render() {
    return (
      <div id="login" className="up">
        <Alert stack={{limit: 3}} />
        <div className="module form-module">
          {this.getIcon()}
          <div className="form">
            <h2>{this.getTitle()}</h2>
            { this.state.error ?
                <div className="error"> {this.state.error} </div>
                :
                ''
            }
            {this.getForm()}
          </div>
          <div className="cta">
            {this.getButton()}
            <FlatButton label="忘记密码" primary={true} onClick={()=> this.changeTab('forgot')}/>
          </div>
        </div>
      </div>
    );
  }
}

_Page.propTypes = {
  location: PropTypes.object,
};
export default _Page;
