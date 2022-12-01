"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

_app["default"].listen(_app["default"].get('port'));

console.log('Server on port', _app["default"].get('port'));
/* import app from './app'

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server on port ${PORT}`);
}); */