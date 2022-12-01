"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var config = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "soboce",
  port: process.env.DB_PORT || "3306"
};
/* export const config = {
  host: process.env.DB_HOST || "498zzu4dy6t9.us-east-3.psdb.cloud",
  user: process.env.DB_USER || "3o2j6zv3whyi",
  password: process.env.DB_PASSWORD || "pscale_pw_sgTOPcs4pDd3rsB6yv2SxZDYdg0qJEexPQrQ1QL2R-0",
  database: process.env.DB_DATABASE || "tgsoboce",
  port: process.env.DB_PORT ||"3306",
  
  
}; */

exports.config = config;