/* eslint-disable no-undef */
/*
 * @Descripttion: index.spec.js 冒烟测试
 * @Author: blackdous
 * @Date: 2020-07-23 08:09:23
 * @LastEditors: blackdous
 * @LastEditTime: 2020-07-23 10:13:48
 */

// const webpack = require('webpack');
// const rimraf = require('rimraf');
const path = require('path');
const glob = require('glob-all');
// const webpackConfig = path.join(__dirname, '../../build/webpack.prod.js');
const distPath = path.join(__dirname, '../../dist');

describe('smoke test', () => {
  it('html test', (done) => {
    const files = glob.sync([`${distPath}/index.html`]);
    if (files.length === 1) {
      // console.log('files: ', files.length);
      done();
    }
  });
  it('css test', (done) => {
    const files = glob.sync([`${distPath}/public/static/css/**.css`]);
    // console.log('files: ', files);
    let stylecss = false;
    files.forEach((filePath) => {
      if (filePath.indexOf('style') !== -1) {
        stylecss = true;
      }
    });
    if (files.length === 2 && stylecss) {
      done();
    }
  });
  it('common test', (done) => {
    const files = glob.sync([`${distPath}/public/static/js/**.js`]);
    let appjs = false;
    let vendorsjs = false;
    files.forEach((filePath) => {
      if (filePath.indexOf('app') !== -1) {
        appjs = true;
      }
      if (filePath.indexOf('vendors') !== -1) {
        vendorsjs = true;
      }
    });
    if (appjs && vendorsjs) {
      done();
    }
  });
});
