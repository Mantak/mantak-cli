import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
class _Layout extends React.Component {
  render() {
    return (
      <div>
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
