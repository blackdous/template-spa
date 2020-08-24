/* eslint-disable no-undef */

const path = require('path');
const glob = require('glob-all');
const distPath = path.join(__dirname, '../../dist');
jest.setTimeout(10000);

describe('smoke test', () => {
  it('html test', (done) => {
    const files = glob.sync([`${distPath}/index.html`]);
    if (files.length === 1) {
      done();
    }
  });
  it('css test', (done) => {
    const files = glob.sync([`${distPath}/public/static/css/**.css`]);
    let stylecss = false;
    files.forEach((filePath) => {
      if (filePath.indexOf('app') !== -1) {
        stylecss = true;
      }
    });
    if (files.length && stylecss) {
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
      if (filePath.indexOf('vendor') !== -1) {
        vendorsjs = true;
      }
    });
    if (appjs && vendorsjs) {
      done();
    }
  });
});
