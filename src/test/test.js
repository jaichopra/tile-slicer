/* global describe, it  */
/* eslint-disable func-names, prefer-arrow-callback*/
process.env.NODE_ENV = 'test';
require('source-map-support').install();
function importTest(name, path) {
  describe(name, function () {
    require(path);
  });
}

describe('tile-slicer unit tests', function () {
  importTest('MyModule', './spec/example.spec');
});
