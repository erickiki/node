"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.saveUser = exports.getUsersCount = exports.getUsers = exports.getUser = exports.deleteUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var getUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var connection, _yield$connection$exe, _yield$connection$exe2, rows;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _database.connect)();

          case 2:
            connection = _context.sent;
            _context.next = 5;
            return connection.execute("select * from usuarios_excel ");

          case 5:
            _yield$connection$exe = _context.sent;
            _yield$connection$exe2 = (0, _slicedToArray2["default"])(_yield$connection$exe, 1);
            rows = _yield$connection$exe2[0];
            res.json(rows);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var saveUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var connection, _yield$connection$exe3, _yield$connection$exe4, results, newUser;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0, _database.connect)();

          case 3:
            connection = _context2.sent;
            _context2.next = 6;
            return connection.execute("INSERT INTO tasks(title, description) VALUES (?, ?)", [req.body.title, req.body.description]);

          case 6:
            _yield$connection$exe3 = _context2.sent;
            _yield$connection$exe4 = (0, _slicedToArray2["default"])(_yield$connection$exe3, 1);
            results = _yield$connection$exe4[0];
            newUser = _objectSpread({
              id: results.insertId
            }, req.body);
            res.json(newUser);
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 13]]);
  }));

  return function saveUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.saveUser = saveUser;

var getUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var connection, id, _yield$connection$exe5, _yield$connection$exe6, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _database.connect)();

          case 2:
            connection = _context3.sent;
            id = req.params.id;
            _context3.next = 6;
            return connection.execute("SELECT MAX(id) as id,MAX(cliente)as cliente,MAX(obra)as obra,MAX(direccion)as direccion,MAX(n_informe) as n_informe, count(n_probeta) as n_probeta,  MAX(n_guia)as n_guia,TRUNCATE(AVG(resistencia),2)as resistencia, MAX(f_emitido) as f_emitido, MAX(f_ingreso)as f_ingreso,   MAX(IF(ensayo ='C','COMPRESION',if(ensayo='P','FLEXOTRACCION',null)))as ensayo,  MAX(IF(ensayo ='C','ASTM C 39 - 96',if(ensayo='P','ASTM C 78 - 94',null)))as norma   FROM `excel` WHERE cliente = ?  OR n_guia = ? GROUP BY n_guia", [id, id]);

          case 6:
            _yield$connection$exe5 = _context3.sent;
            _yield$connection$exe6 = (0, _slicedToArray2["default"])(_yield$connection$exe5, 1);
            rows = _yield$connection$exe6[0];
            res.json(rows);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var connection, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return (0, _database.connect)();

          case 2:
            connection = _context4.sent;
            _context4.next = 5;
            return connection.execute("DELETE FROM tasks WHERE id = ?", [req.params.id]);

          case 5:
            result = _context4.sent;
            console.log(result);
            res.sendStatus(204);

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;

var updateUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var connection;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return (0, _database.connect)();

          case 2:
            connection = _context5.sent;
            _context5.next = 5;
            return connection.query("UPDATE tasks SET ? WHERE id = ?", [req.body, req.params.id]);

          case 5:
            res.sendStatus(204);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function updateUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;

var getUsersCount = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var connection, _yield$connection$exe7, _yield$connection$exe8, rows;

    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return (0, _database.connect)();

          case 2:
            connection = _context6.sent;
            _context6.next = 5;
            return connection.execute("SELECT COUNT(*) FROM tasks");

          case 5:
            _yield$connection$exe7 = _context6.sent;
            _yield$connection$exe8 = (0, _slicedToArray2["default"])(_yield$connection$exe7, 1);
            rows = _yield$connection$exe8[0];
            res.json(rows[0]["COUNT(*)"]);

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getUsersCount(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.getUsersCount = getUsersCount;