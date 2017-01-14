import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
class _Layout extends React.Component {
  render() {
    return (
      <div>
        来自 Admin layout
        {this.props.children}
        <span onClick={()=> browserHistory.push('/admin')}>
          dashboard
        </span> <br/>
        <span onClick={()=> browserHistory.push('/admin/settings')}>
          settings
        </span> <br/>
      </div>
    );
  }
}
_Layout.propTypes = {
  children: PropTypes.element,
};
export default _Layout;
