'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.w = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var ARGUMENT_NAMES = /([^\s,]+)/g;
function getParamNames(func) {
  var fnStr = func.toString().replace(STRIP_COMMENTS, '');
  var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
  if (result === null) {
    result = [];
  }
  return result;
}

var w = exports.w = function w(fn) {
  return function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(done) {
      var fnParams;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              fnParams = getParamNames(fn);

              if (!fnParams.length) {
                _context.next = 7;
                break;
              }

              _context.next = 5;
              return fn(done);

            case 5:
              _context.next = 10;
              break;

            case 7:
              _context.next = 9;
              return fn();

            case 9:
              done();

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](0);

              done(_context.t0);

            case 15:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 12]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L3V0aWwuanMiXSwibmFtZXMiOlsiU1RSSVBfQ09NTUVOVFMiLCJBUkdVTUVOVF9OQU1FUyIsImdldFBhcmFtTmFtZXMiLCJmdW5jIiwiZm5TdHIiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJyZXN1bHQiLCJzbGljZSIsImluZGV4T2YiLCJtYXRjaCIsInciLCJmbiIsImRvbmUiLCJmblBhcmFtcyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxpQkFBaUIsa0NBQXZCO0FBQ0EsSUFBTUMsaUJBQWlCLFlBQXZCO0FBQ0EsU0FBU0MsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDM0IsTUFBTUMsUUFBUUQsS0FBS0UsUUFBTCxHQUFnQkMsT0FBaEIsQ0FBd0JOLGNBQXhCLEVBQXdDLEVBQXhDLENBQWQ7QUFDQSxNQUFJTyxTQUFTSCxNQUFNSSxLQUFOLENBQVlKLE1BQU1LLE9BQU4sQ0FBYyxHQUFkLElBQXFCLENBQWpDLEVBQW9DTCxNQUFNSyxPQUFOLENBQWMsR0FBZCxDQUFwQyxFQUF3REMsS0FBeEQsQ0FBOERULGNBQTlELENBQWI7QUFDQSxNQUFJTSxXQUFXLElBQWYsRUFBcUI7QUFDbkJBLGFBQVMsRUFBVDtBQUNEO0FBQ0QsU0FBT0EsTUFBUDtBQUNEOztBQUVNLElBQU1JLGdCQUFJLFNBQUpBLENBQUksQ0FBQ0MsRUFBRCxFQUFRO0FBQ3ZCO0FBQUEsMEVBQU8saUJBQU9DLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFR0Msc0JBRkgsR0FFY1osY0FBY1UsRUFBZCxDQUZkOztBQUFBLG1CQUdDRSxTQUFTQyxNQUhWO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBSUtILEdBQUdDLElBQUgsQ0FKTDs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHFCQU1LRCxJQU5MOztBQUFBO0FBT0RDOztBQVBDO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBVUhBOztBQVZHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhRCxDQWRNIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTVFJJUF9DT01NRU5UUyA9IC8oKFxcL1xcLy4qJCl8KFxcL1xcKltcXHNcXFNdKj9cXCpcXC8pKS9tZztcbmNvbnN0IEFSR1VNRU5UX05BTUVTID0gLyhbXlxccyxdKykvZztcbmZ1bmN0aW9uIGdldFBhcmFtTmFtZXMoZnVuYykge1xuICBjb25zdCBmblN0ciA9IGZ1bmMudG9TdHJpbmcoKS5yZXBsYWNlKFNUUklQX0NPTU1FTlRTLCAnJyk7XG4gIGxldCByZXN1bHQgPSBmblN0ci5zbGljZShmblN0ci5pbmRleE9mKCcoJykgKyAxLCBmblN0ci5pbmRleE9mKCcpJykpLm1hdGNoKEFSR1VNRU5UX05BTUVTKTtcbiAgaWYgKHJlc3VsdCA9PT0gbnVsbCkge1xuICAgIHJlc3VsdCA9IFtdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCB3ID0gKGZuKSA9PiB7XG4gIHJldHVybiBhc3luYyAoZG9uZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmblBhcmFtcyA9IGdldFBhcmFtTmFtZXMoZm4pO1xuICAgICAgaWYgKGZuUGFyYW1zLmxlbmd0aCkge1xuICAgICAgICBhd2FpdCBmbihkb25lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF3YWl0IGZuKCk7XG4gICAgICAgIGRvbmUoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRvbmUoZXJyKTtcbiAgICB9XG4gIH07XG59O1xuIl19