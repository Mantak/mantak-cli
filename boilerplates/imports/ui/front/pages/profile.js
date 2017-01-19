import React from 'react';
import { browserHistory } from 'react-router';
class _Page extends React.Component {
  componentWillMount() {
    if (!Meteor.userId()) {
      return browserHistory.push('/login?redirect_to=/profile');
    }
  }
  render() {
    return (
      <div onClick={()=> Meteor.logout(browserHistory.push('/'))}>
        来自 profile
        退出登录
      </div>
    );
  }
}
export default _Page;
