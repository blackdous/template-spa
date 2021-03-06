/*
 * @Descripttion: utils
 * @Author: all
 * @Date: 2020-07-16 17:42:42
 * @LastEditors: all
 * @LastEditTime: 2020-07-16 17:48:22
 */ 
const path = require('path');
const config = require('../config');

exports.assetsPath = function (_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;

  return path.posix.join(assetsSubDirectory, _path);
};
exports.resolve = function (dir) {
  return path.join(__dirname, '..', dir);
};
