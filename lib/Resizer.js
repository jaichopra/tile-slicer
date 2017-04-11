'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Resizer = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sharp = require('sharp');
var fs = require('fs');
var path = require('path');

var Resizer = exports.Resizer = function () {
  function Resizer() {
    (0, _classCallCheck3.default)(this, Resizer);
  }

  (0, _createClass3.default)(Resizer, null, [{
    key: 'generateLevels',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(inputPath) {
        var x, y, level, pipeline, metaData, levelPromises, levelPaths, writableStreams;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                x = void 0;
                y = void 0;
                level = 0;
                pipeline = sharp(inputPath);
                _context.next = 6;
                return sharp(inputPath).metadata();

              case 6:
                metaData = _context.sent;

                x = metaData.width;
                y = metaData.height;
                levelPromises = [];
                levelPaths = [];
                writableStreams = [];

              case 12:
                if (!(x >= 1 || y >= 1)) {
                  _context.next = 22;
                  break;
                }

                console.log('Dimensions of ' + x + ' x ' + y);
                levelPromises.push(this.generateLevelDimensions(level, x, y, pipeline, levelPaths, writableStreams));

                if (!(x === 1 && y === 1)) {
                  _context.next = 17;
                  break;
                }

                return _context.abrupt('break', 22);

              case 17:
                x = Math.max(Math.floor(x * 0.5), 1);
                y = Math.max(Math.floor(y * 0.5), 1);
                ++level;
                _context.next = 12;
                break;

              case 22:
                console.log('Generated ' + level + ' levels!');
                _context.next = 25;
                return _promise2.default.all(levelPromises);

              case 25:
                return _context.abrupt('return', levelPaths);

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function generateLevels(_x) {
        return _ref.apply(this, arguments);
      }

      return generateLevels;
    }()
  }, {
    key: 'writeToFile',
    value: function writeToFile(inputPath, pipeline) {
      return new _promise2.default(function (resolve, reject) {
        var readableStream = fs.createReadStream(inputPath);
        readableStream.pipe(pipeline).on('finish', resolve).on('error', reject);
      });
    }
  }, {
    key: 'generateLevelDimensions',
    value: function generateLevelDimensions(level, x, y, _pipeline, levelPaths, writableStreams) {
      var levelPath = path.join(__dirname, '../tmp/' + level + '.jpg');
      levelPaths.push({
        value: level,
        path: levelPath
      });
      var writableStream = fs.createWriteStream(levelPath);
      writableStreams.push(writableStream);
      return _pipeline.clone().resize(x, y).toFile(levelPath);
    }
  }]);
  return Resizer;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXNpemVyLmpzIl0sIm5hbWVzIjpbInNoYXJwIiwicmVxdWlyZSIsImZzIiwicGF0aCIsIlJlc2l6ZXIiLCJpbnB1dFBhdGgiLCJ4IiwieSIsImxldmVsIiwicGlwZWxpbmUiLCJtZXRhZGF0YSIsIm1ldGFEYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJsZXZlbFByb21pc2VzIiwibGV2ZWxQYXRocyIsIndyaXRhYmxlU3RyZWFtcyIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZ2VuZXJhdGVMZXZlbERpbWVuc2lvbnMiLCJNYXRoIiwibWF4IiwiZmxvb3IiLCJhbGwiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGFibGVTdHJlYW0iLCJjcmVhdGVSZWFkU3RyZWFtIiwicGlwZSIsIm9uIiwiX3BpcGVsaW5lIiwibGV2ZWxQYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsInZhbHVlIiwid3JpdGFibGVTdHJlYW0iLCJjcmVhdGVXcml0ZVN0cmVhbSIsImNsb25lIiwicmVzaXplIiwidG9GaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVFDLFFBQVEsT0FBUixDQUFkO0FBQ0EsSUFBTUMsS0FBS0QsUUFBUSxJQUFSLENBQVg7QUFDQSxJQUFNRSxPQUFPRixRQUFRLE1BQVIsQ0FBYjs7SUFFYUcsTyxXQUFBQSxPOzs7Ozs7Ozs2RkFDaUJDLFM7Ozs7OztBQUN0QkMsaUI7QUFDQUMsaUI7QUFDQUMscUIsR0FBUSxDO0FBQ05DLHdCLEdBQVdULE1BQU1LLFNBQU4sQzs7dUJBQ01MLE1BQU1LLFNBQU4sRUFBaUJLLFFBQWpCLEU7OztBQUFqQkMsd0I7O0FBQ05MLG9CQUFJSyxTQUFTQyxLQUFiO0FBQ0FMLG9CQUFJSSxTQUFTRSxNQUFiO0FBQ01DLDZCLEdBQWdCLEU7QUFDaEJDLDBCLEdBQWEsRTtBQUNiQywrQixHQUFrQixFOzs7c0JBQ2pCVixLQUFLLENBQUwsSUFBVUMsS0FBSyxDOzs7OztBQUNwQlUsd0JBQVFDLEdBQVIsb0JBQTZCWixDQUE3QixXQUFvQ0MsQ0FBcEM7QUFDQU8sOEJBQWNLLElBQWQsQ0FBbUIsS0FBS0MsdUJBQUwsQ0FBNkJaLEtBQTdCLEVBQW9DRixDQUFwQyxFQUF1Q0MsQ0FBdkMsRUFBMENFLFFBQTFDLEVBQW9ETSxVQUFwRCxFQUFnRUMsZUFBaEUsQ0FBbkI7O3NCQUNJVixNQUFNLENBQU4sSUFBV0MsTUFBTSxDOzs7Ozs7OztBQUdyQkQsb0JBQUllLEtBQUtDLEdBQUwsQ0FBU0QsS0FBS0UsS0FBTCxDQUFXakIsSUFBSSxHQUFmLENBQVQsRUFBOEIsQ0FBOUIsQ0FBSjtBQUNBQyxvQkFBSWMsS0FBS0MsR0FBTCxDQUFTRCxLQUFLRSxLQUFMLENBQVdoQixJQUFJLEdBQWYsQ0FBVCxFQUE4QixDQUE5QixDQUFKO0FBQ0Esa0JBQUVDLEtBQUY7Ozs7O0FBRUZTLHdCQUFRQyxHQUFSLGdCQUF5QlYsS0FBekI7O3VCQUNNLGtCQUFRZ0IsR0FBUixDQUFZVixhQUFaLEM7OztpREFHQ0MsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVVixTLEVBQVdJLFEsRUFBVTtBQUN0QyxhQUFPLHNCQUFZLFVBQUNnQixPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsWUFBTUMsaUJBQWlCekIsR0FBRzBCLGdCQUFILENBQW9CdkIsU0FBcEIsQ0FBdkI7QUFDQXNCLHVCQUNHRSxJQURILENBQ1FwQixRQURSLEVBRUdxQixFQUZILENBRU0sUUFGTixFQUVnQkwsT0FGaEIsRUFHR0ssRUFISCxDQUdNLE9BSE4sRUFHZUosTUFIZjtBQUlELE9BTk0sQ0FBUDtBQU9EOzs7NENBRThCbEIsSyxFQUFPRixDLEVBQUdDLEMsRUFBR3dCLFMsRUFBV2hCLFUsRUFBWUMsZSxFQUFpQjtBQUNsRixVQUFNZ0IsWUFBWTdCLEtBQUs4QixJQUFMLENBQVVDLFNBQVYsY0FBK0IxQixLQUEvQixVQUFsQjtBQUNBTyxpQkFBV0ksSUFBWCxDQUFnQjtBQUNkZ0IsZUFBTzNCLEtBRE87QUFFZEwsY0FBTTZCO0FBRlEsT0FBaEI7QUFJQSxVQUFNSSxpQkFBaUJsQyxHQUFHbUMsaUJBQUgsQ0FBcUJMLFNBQXJCLENBQXZCO0FBQ0FoQixzQkFBZ0JHLElBQWhCLENBQXFCaUIsY0FBckI7QUFDQSxhQUFPTCxVQUNKTyxLQURJLEdBRUpDLE1BRkksQ0FFR2pDLENBRkgsRUFFTUMsQ0FGTixFQUdKaUMsTUFISSxDQUdHUixTQUhILENBQVA7QUFJRCIsImZpbGUiOiJSZXNpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2hhcnAgPSByZXF1aXJlKCdzaGFycCcpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuZXhwb3J0IGNsYXNzIFJlc2l6ZXIge1xuICBzdGF0aWMgYXN5bmMgZ2VuZXJhdGVMZXZlbHMoaW5wdXRQYXRoKSB7XG4gICAgbGV0IHg7XG4gICAgbGV0IHk7XG4gICAgbGV0IGxldmVsID0gMDtcbiAgICBjb25zdCBwaXBlbGluZSA9IHNoYXJwKGlucHV0UGF0aCk7XG4gICAgY29uc3QgbWV0YURhdGEgPSBhd2FpdCBzaGFycChpbnB1dFBhdGgpLm1ldGFkYXRhKCk7XG4gICAgeCA9IG1ldGFEYXRhLndpZHRoO1xuICAgIHkgPSBtZXRhRGF0YS5oZWlnaHQ7XG4gICAgY29uc3QgbGV2ZWxQcm9taXNlcyA9IFtdO1xuICAgIGNvbnN0IGxldmVsUGF0aHMgPSBbXTtcbiAgICBjb25zdCB3cml0YWJsZVN0cmVhbXMgPSBbXTtcbiAgICB3aGlsZSAoeCA+PSAxIHx8IHkgPj0gMSkge1xuICAgICAgY29uc29sZS5sb2coYERpbWVuc2lvbnMgb2YgJHt4fSB4ICR7eX1gKTtcbiAgICAgIGxldmVsUHJvbWlzZXMucHVzaCh0aGlzLmdlbmVyYXRlTGV2ZWxEaW1lbnNpb25zKGxldmVsLCB4LCB5LCBwaXBlbGluZSwgbGV2ZWxQYXRocywgd3JpdGFibGVTdHJlYW1zKSk7XG4gICAgICBpZiAoeCA9PT0gMSAmJiB5ID09PSAxKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgeCA9IE1hdGgubWF4KE1hdGguZmxvb3IoeCAqIDAuNSksIDEpO1xuICAgICAgeSA9IE1hdGgubWF4KE1hdGguZmxvb3IoeSAqIDAuNSksIDEpO1xuICAgICAgKytsZXZlbDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coYEdlbmVyYXRlZCAke2xldmVsfSBsZXZlbHMhYCk7XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwobGV2ZWxQcm9taXNlcyk7XG4gICAgLy8gYXdhaXQgdGhpcy53cml0ZVRvRmlsZShpbnB1dFBhdGgsIHBpcGVsaW5lKTtcbiAgICAvLyB3cml0YWJsZVN0cmVhbXMubWFwKHN0cmVhbSA9PiBzdHJlYW0uY2xvc2UoKSk7XG4gICAgcmV0dXJuIGxldmVsUGF0aHM7XG4gIH1cblxuICBzdGF0aWMgd3JpdGVUb0ZpbGUoaW5wdXRQYXRoLCBwaXBlbGluZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZWFkYWJsZVN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oaW5wdXRQYXRoKTtcbiAgICAgIHJlYWRhYmxlU3RyZWFtXG4gICAgICAgIC5waXBlKHBpcGVsaW5lKVxuICAgICAgICAub24oJ2ZpbmlzaCcsIHJlc29sdmUpXG4gICAgICAgIC5vbignZXJyb3InLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdlbmVyYXRlTGV2ZWxEaW1lbnNpb25zKGxldmVsLCB4LCB5LCBfcGlwZWxpbmUsIGxldmVsUGF0aHMsIHdyaXRhYmxlU3RyZWFtcykge1xuICAgIGNvbnN0IGxldmVsUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGAuLi90bXAvJHtsZXZlbH0uanBnYCk7XG4gICAgbGV2ZWxQYXRocy5wdXNoKHtcbiAgICAgIHZhbHVlOiBsZXZlbCxcbiAgICAgIHBhdGg6IGxldmVsUGF0aCxcbiAgICB9KTtcbiAgICBjb25zdCB3cml0YWJsZVN0cmVhbSA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKGxldmVsUGF0aCk7XG4gICAgd3JpdGFibGVTdHJlYW1zLnB1c2god3JpdGFibGVTdHJlYW0pO1xuICAgIHJldHVybiBfcGlwZWxpbmVcbiAgICAgIC5jbG9uZSgpXG4gICAgICAucmVzaXplKHgsIHkpXG4gICAgICAudG9GaWxlKGxldmVsUGF0aCk7XG4gIH1cbn1cbiJdfQ==