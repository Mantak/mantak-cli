import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { white, grey900, deepOrangeA400,  grey100 } from 'material-ui/styles/colors';

// TODO https://github.com/callemall/material-ui/blob/master/src/styles/getMuiTheme.js

const themeSettings = {
  barHeight: 50,
  drawerWidth: 260,
  drawerMiniWidth: 50,
  avatarBg: '',

  buttonColor: deepOrangeA400,

  // navBg: deepPurple500,
  headerBg: white,
  fontColor: grey900,
  logoBg: '#373C47',
  navBg: '#2D323E',
  bodyBg: grey100,
};

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: themeSettings.barHeight,
    maxHeight: themeSettings.barHeight,
    color: themeSettings.headerBg,
    textColor: themeSettings.fontColor,
  },
  drawer: {
    width: themeSettings.drawerWidth,
    color: themeSettings.navBg,
  },
  listItem: {
    nestedLevelDepth: 18,
    leftIconColor: themeSettings.white,
    rightIconColor: themeSettings.white,
  },
  raisedButton: {
    primaryColor: themeSettings.buttonColor,
  },
});


export { themeSettings };
export default themeDefault;
