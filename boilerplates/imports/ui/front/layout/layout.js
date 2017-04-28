import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Alert from 'react-s-alert';

class _Layout extends React.Component {
  render() {
    return (
      <div>
        <Alert stack={{limit: 3}} />
        来自layout
        {this.props.children}
        <span onClick={()=> browserHistory.push('/')}>
          home
        </span> <br/>
        <span onClick={()=> browserHistory.push('/landing')}>
          landing
        </span> <br/>
        <span onClick={()=> browserHistory.push('/login')}>
          login
        </span> <br/>
        <span onClick={()=> browserHistory.push('/profile')}>
          profile
        </span> <br/>
      </div>
    );
  }
}
_Layout.propTypes = {
  children: PropTypes.element,
};
export default _Layout;
