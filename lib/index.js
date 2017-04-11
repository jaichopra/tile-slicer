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
require('events').EventEmitter.prototype._maxListeners = 1000;

var run = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
    var levels, slicer, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, level;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Resizer.Resizer.generateLevels(path.join(__dirname, '../data/Cat.jpg'));

          case 2:
            levels = _context.sent;
            slicer = new _TileSlicer.TileSlicer();
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 7;
            _iterator = (0, _getIterator3.default)(levels);

          case 9:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 17;
              break;
            }

            level = _step.value;

            console.log('Attempting to slice tiles for level ' + level.value);
            _context.next = 14;
            return slicer.slice(level.path, level.value);

          case 14:
            _iteratorNormalCompletion = true;
            _context.next = 9;
            break;

          case 17:
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context['catch'](7);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 23:
            _context.prev = 23;
            _context.prev = 24;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 26:
            _context.prev = 26;

            if (!_didIteratorError) {
              _context.next = 29;
              break;
            }

            throw _iteratorError;

          case 29:
            return _context.finish(26);

          case 30:
            return _context.finish(23);

          case 31:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[7, 19, 23, 31], [24,, 26, 30]]);
  }));

  return function run() {
    return _ref.apply(this, arguments);
  };
}();

run().then().catch(function (err) {
  console.log(err.stack);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJwYXRoIiwicmVxdWlyZSIsIkV2ZW50RW1pdHRlciIsInByb3RvdHlwZSIsIl9tYXhMaXN0ZW5lcnMiLCJydW4iLCJnZW5lcmF0ZUxldmVscyIsImpvaW4iLCJfX2Rpcm5hbWUiLCJsZXZlbHMiLCJzbGljZXIiLCJsZXZlbCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInNsaWNlIiwidGhlbiIsImNhdGNoIiwiZXJyIiwic3RhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFGQUEsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEdBQXVCRixRQUFRQyxHQUFSLENBQVlDLFFBQVosSUFBd0IsYUFBL0M7O0FBR0EsSUFBTUMsT0FBT0MsUUFBUSxNQUFSLENBQWI7QUFDQUEsUUFBUSxRQUFSLEVBQWtCQyxZQUFsQixDQUErQkMsU0FBL0IsQ0FBeUNDLGFBQXpDLEdBQXlELElBQXpEOztBQUVBLElBQU1DO0FBQUEsd0VBQU07QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ1csaUJBQVFDLGNBQVIsQ0FBdUJOLEtBQUtPLElBQUwsQ0FBVUMsU0FBVixFQUFxQixpQkFBckIsQ0FBdkIsQ0FEWDs7QUFBQTtBQUNKQyxrQkFESTtBQUVKQyxrQkFGSSxHQUVLLDRCQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFHVUQsTUFIVjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdDRSxpQkFIRDs7QUFJUkMsb0JBQVFDLEdBQVIsMENBQW1ERixNQUFNRyxLQUF6RDtBQUpRO0FBQUEsbUJBS0ZKLE9BQU9LLEtBQVAsQ0FBYUosTUFBTVgsSUFBbkIsRUFBeUJXLE1BQU1HLEtBQS9CLENBTEU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBU0FULE1BQ0NXLElBREQsR0FFQ0MsS0FGRCxDQUVPLGVBQU87QUFDWkwsVUFBUUMsR0FBUixDQUFZSyxJQUFJQyxLQUFoQjtBQUNELENBSkQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJwcm9jZXNzLmVudi5OT0RFX0VOViA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5pbXBvcnQgeyBUaWxlU2xpY2VyIH0gZnJvbSAnLi9UaWxlU2xpY2VyJztcbmltcG9ydCB7IFJlc2l6ZXIgfSBmcm9tICcuL1Jlc2l6ZXInO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IDEwMDA7XG5cbmNvbnN0IHJ1biA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGV2ZWxzID0gYXdhaXQgUmVzaXplci5nZW5lcmF0ZUxldmVscyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vZGF0YS9DYXQuanBnJykpO1xuICBjb25zdCBzbGljZXIgPSBuZXcgVGlsZVNsaWNlcigpO1xuICBmb3IgKGNvbnN0IGxldmVsIG9mIGxldmVscykge1xuICAgIGNvbnNvbGUubG9nKGBBdHRlbXB0aW5nIHRvIHNsaWNlIHRpbGVzIGZvciBsZXZlbCAke2xldmVsLnZhbHVlfWApO1xuICAgIGF3YWl0IHNsaWNlci5zbGljZShsZXZlbC5wYXRoLCBsZXZlbC52YWx1ZSk7XG4gIH1cbn07XG5cbnJ1bigpXG4udGhlbigpXG4uY2F0Y2goZXJyID0+IHtcbiAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcbn0pO1xuIl19