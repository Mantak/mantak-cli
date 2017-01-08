import React, { PropTypes } from 'react';
class _Layout extends React.Component {
  render() {
    return (
      <div>
        来自layout
        {this.props.children}
      </div>
    );
  }
}
_Layout.propTypes = {
  children: PropTypes.element,
};
export default _Layout;
