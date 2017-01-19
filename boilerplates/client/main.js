import React  from 'react';
import ReactDOM  from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { Provider }  from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, browserHistory } from 'react-router';

import AppStore from '/imports/startup/client/store';
import AppTheme from '/imports/startup/client/theme';
import AppRoutes from '/imports/startup/client/routes';

injectTapEventPlugin();

Meteor.startup(()=> {
  ReactDOM.render(
    <Provider store={AppStore}>
      <MuiThemeProvider muiTheme={AppTheme}>
        <Router history={browserHistory} routes={AppRoutes}/>
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('main')
  );
});
