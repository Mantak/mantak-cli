import React, { PropTypes } from 'react';
class _Page extends React.Component {
  componentWillMount() {
    const token = this.props.params.token;
    Accounts.verifyEmail( token, ( error ) =>{
      if ( error ) {
        console.log(error);
      } else {
        console.log('邮件验证完毕');
      }
    });
  }
  render() {
    return (
      <div>
        恭喜已经确认邮箱
      </div>
    );
  }
}

_Page.propTypes = {
  params: PropTypes.object,
};

export default _Page;
