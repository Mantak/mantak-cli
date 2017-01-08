import React from 'react';
import RegisterIcon from 'material-ui/svg-icons/social/person-add';
import LoginIcon from 'material-ui/svg-icons/social/person';

// import Form from '../components/login/form';

class _Page extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true,
    };
  }
  componentDidMount() {
    $('body').css('overflow', 'hidden');
  }
  handleToggle() {
    this.setState({login: !this.state.login});
  }
  render() {
    return (
      <div id="login" className="up">
        { this.state.login ?
          <div className="module form-module">
            <div className="toggle click" onClick={this.handleToggle.bind(this)}>
              <LoginIcon style={{color: 'white', marginTop: '3'}}/>
            </div>
            <div className="form">
              <h2>登 录</h2>
              <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
              </form>
            </div>
            <div className="cta">
              <span className="click" onClick={this.handleToggle.bind(this)}>注册</span>
              &nbsp; &nbsp; &nbsp;
              <span className="click">忘记密码</span>
            </div>
          </div>
          :
          <div className="module form-module">
            <div className="toggle click" onClick={this.handleToggle.bind(this)}>
              <RegisterIcon style={{color: 'white', marginTop: '3'}}/>
            </div>
            <div className="form">
              <h2>注 册</h2>
              <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="email" placeholder="Email Address"/>
                <input type="tel" placeholder="Phone Number"/>
                <button>Register</button>
              </form>
            </div>
            <div className="cta">
              <span className="click" onClick={this.handleToggle.bind(this)}>登录</span>
              &nbsp; &nbsp; &nbsp;
              <span className="click">忘记密码</span>
            </div>
          </div>
        }
      </div>
    );
  }
}
export default _Page;
