'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _TileSlicer = require('./TileSlicer');

var _Resizer = require('./Resizer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var path = require('path');
var fs = require('fs');
require('events').EventEmitter.prototype._maxListeners = 1000;

var run = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var file, levels, slicer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, level;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(process.argv.length < 3)) {
              _context.next = 2;
              break;
            }

            throw new Error('Please provide an image file path relative to the local dir');

          case 2:
            file = path.join(__dirname, '../', process.argv[2]);

            if (fs.existsSync(file)) {
              _context.next = 5;
              break;
            }

            throw new Error('Please ensure the file exists at the path ' + file);

          case 5:
            _context.next = 7;
            return _Resizer.Resizer.generateLevels(file);

          case 7:
            levels = _context.sent;
            slicer = new _TileSlicer.TileSlicer();
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 12;
            _iterator = (0, _getIterator3.default)(levels);

          case 14:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 22;
              break;
            }

            level = _step.value;

            console.log('Attempting to slice tiles for level ' + level.value);
            _context.next = 19;
            return slicer.slice(level.path, level.value);

          case 19:
            _iteratorNormalCompletion = true;
            _context.next = 14;
            break;

          case 22:
            _context.next = 28;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context['catch'](12);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 28:
            _context.prev = 28;
            _context.prev = 29;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 31:
            _context.prev = 31;

            if (!_didIteratorError) {
              _context.next = 34;
              break;
            }

            throw _iteratorError;

          case 34:
            return _context.finish(31);

          case 35:
            return _context.finish(28);

          case 36:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[12, 24, 28, 36], [29,, 31, 35]]);
  }));

  return function run() {
    return _ref.apply(this, arguments);
  };
}();

run().then().catch(function (err) {
  console.log(err);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJwYXRoIiwicmVxdWlyZSIsImZzIiwiRXZlbnRFbWl0dGVyIiwicHJvdG90eXBlIiwiX21heExpc3RlbmVycyIsInJ1biIsImFyZ3YiLCJsZW5ndGgiLCJFcnJvciIsImZpbGUiLCJqb2luIiwiX19kaXJuYW1lIiwiZXhpc3RzU3luYyIsImdlbmVyYXRlTGV2ZWxzIiwibGV2ZWxzIiwic2xpY2VyIiwibGV2ZWwiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJzbGljZSIsInRoZW4iLCJjYXRjaCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUZBQSxRQUFRQyxHQUFSLENBQVlDLFFBQVosR0FBdUJGLFFBQVFDLEdBQVIsQ0FBWUMsUUFBWixJQUF3QixhQUEvQzs7QUFHQSxJQUFNQyxPQUFPQyxRQUFRLE1BQVIsQ0FBYjtBQUNBLElBQU1DLEtBQUtELFFBQVEsSUFBUixDQUFYO0FBQ0FBLFFBQVEsUUFBUixFQUFrQkUsWUFBbEIsQ0FBK0JDLFNBQS9CLENBQXlDQyxhQUF6QyxHQUF5RCxJQUF6RDs7QUFFQSxJQUFNQztBQUFBLHdFQUFNO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDTlQsUUFBUVUsSUFBUixDQUFhQyxNQUFiLEdBQXNCLENBRGhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQUVGLElBQUlDLEtBQUosQ0FBVSw2REFBVixDQUZFOztBQUFBO0FBSUpDLGdCQUpJLEdBSUdWLEtBQUtXLElBQUwsQ0FBVUMsU0FBVixFQUFxQixLQUFyQixFQUE0QmYsUUFBUVUsSUFBUixDQUFhLENBQWIsQ0FBNUIsQ0FKSDs7QUFBQSxnQkFLTEwsR0FBR1csVUFBSCxDQUFjSCxJQUFkLENBTEs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsa0JBTUYsSUFBSUQsS0FBSixnREFBdURDLElBQXZELENBTkU7O0FBQUE7QUFBQTtBQUFBLG1CQVFXLGlCQUFRSSxjQUFSLENBQXVCSixJQUF2QixDQVJYOztBQUFBO0FBUUpLLGtCQVJJO0FBU0pDLGtCQVRJLEdBU0ssNEJBVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1EQVVVRCxNQVZWOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBVUNFLGlCQVZEOztBQVdSQyxvQkFBUUMsR0FBUiwwQ0FBbURGLE1BQU1HLEtBQXpEO0FBWFE7QUFBQSxtQkFZRkosT0FBT0ssS0FBUCxDQUFhSixNQUFNakIsSUFBbkIsRUFBeUJpQixNQUFNRyxLQUEvQixDQVpFOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQWdCQWQsTUFDQ2dCLElBREQsR0FFQ0MsS0FGRCxDQUVPLGVBQU87QUFDWkwsVUFBUUMsR0FBUixDQUFZSyxHQUFaO0FBQ0QsQ0FKRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbInByb2Nlc3MuZW52Lk5PREVfRU5WID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcbmltcG9ydCB7IFRpbGVTbGljZXIgfSBmcm9tICcuL1RpbGVTbGljZXInO1xuaW1wb3J0IHsgUmVzaXplciB9IGZyb20gJy4vUmVzaXplcic7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xucmVxdWlyZSgnZXZlbnRzJykuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5fbWF4TGlzdGVuZXJzID0gMTAwMDtcblxuY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5hcmd2Lmxlbmd0aCA8IDMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGFuIGltYWdlIGZpbGUgcGF0aCByZWxhdGl2ZSB0byB0aGUgbG9jYWwgZGlyJyk7XG4gIH1cbiAgY29uc3QgZmlsZSA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi8nLCBwcm9jZXNzLmFyZ3ZbMl0pO1xuICBpZiAoIWZzLmV4aXN0c1N5bmMoZmlsZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFBsZWFzZSBlbnN1cmUgdGhlIGZpbGUgZXhpc3RzIGF0IHRoZSBwYXRoICR7ZmlsZX1gKTtcbiAgfVxuICBjb25zdCBsZXZlbHMgPSBhd2FpdCBSZXNpemVyLmdlbmVyYXRlTGV2ZWxzKGZpbGUpO1xuICBjb25zdCBzbGljZXIgPSBuZXcgVGlsZVNsaWNlcigpO1xuICBmb3IgKGNvbnN0IGxldmVsIG9mIGxldmVscykge1xuICAgIGNvbnNvbGUubG9nKGBBdHRlbXB0aW5nIHRvIHNsaWNlIHRpbGVzIGZvciBsZXZlbCAke2xldmVsLnZhbHVlfWApO1xuICAgIGF3YWl0IHNsaWNlci5zbGljZShsZXZlbC5wYXRoLCBsZXZlbC52YWx1ZSk7XG4gIH1cbn07XG5cbnJ1bigpXG4udGhlbigpXG4uY2F0Y2goZXJyID0+IHtcbiAgY29uc29sZS5sb2coZXJyKTtcbn0pO1xuIl19