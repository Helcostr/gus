// This is a very large file to... need to work no this to improve service.

// const DT_style = import(/* webpackChunkName: "DarkTheme" */ '!!css-loader!sass-loader!@/theme/dark/main.scss');
// const LT_style = import(/* webpackChunkName: "LightTheme" */ '!!css-loader!sass-loader!@/theme/light/main.scss');
import DT_style from '!!css-loader!sass-loader!@/theme/dark/main.scss';
import LT_style from '!!css-loader!sass-loader!@/theme/light/main.scss';
const rtlcss = require('rtlcss');
console.log(DT_style);
const DarkThemeRTL = rtlcss.process(DT_style);
const LightThemeRTL = rtlcss.process(LT_style);
export default {
  DarkTheme:DT_style[0][1],
  LightTheme:LT_style[0][1],
  DarkThemeRTL,
  LightThemeRTL
};
