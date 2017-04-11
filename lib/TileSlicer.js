'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TileSlicer = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var os = require('os');
var fs = require('fs');
var sharp = require('sharp');
var path = require('path');

var TileSlicer = exports.TileSlicer = function () {
  function TileSlicer() {
    (0, _classCallCheck3.default)(this, TileSlicer);

    var coresCount = os.cpus().length;
    sharp.concurrency(coresCount);
  }

  (0, _createClass3.default)(TileSlicer, [{
    key: 'slice',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(inputPath, level) {
        var metaData, hSize, vSize, pipeline, pipelinePromises, i, j, endH, endV, h, v, pipelineBuckets, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, buckets;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (inputPath) {
                  _context.next = 2;
                  break;
                }

                throw new Error('We require some input to slice');

              case 2:
                _context.next = 4;
                return this.getMetaData(inputPath);

              case 4:
                metaData = _context.sent;

                console.log('Image of dimensions ' + metaData.width + ' x ' + metaData.height + ' at level ' + level);
                if (!fs.existsSync(path.join(__dirname, '../output/' + level))) {
                  fs.mkdirSync(path.join(__dirname, '../output/' + level));
                }
                hSize = Math.ceil(metaData.width / 256);
                vSize = Math.ceil(metaData.height / 256);
                pipeline = sharp();
                pipelinePromises = [];

                if (hSize === 1 && vSize === 1) {
                  // There is only 1 tile
                  pipelinePromises.push(this.generateOffset(level, 0, 0, pipeline, metaData.width, metaData.height));
                } else {
                  for (i = 0; i < hSize; ++i) {
                    for (j = 0; j < vSize; ++j) {
                      endH = i === hSize - 1;
                      endV = j === vSize - 1;
                      h = void 0;
                      v = void 0;

                      if (endH) {
                        h = metaData.width % 256;
                      }
                      if (endV) {
                        v = metaData.height % 256;
                      }
                      pipelinePromises.push(this.generateOffset(level, i, j, pipeline, h, v));
                    }
                  }
                }

                pipelineBuckets = this.bucket(pipelinePromises, 50);
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 16;
                _iterator = (0, _getIterator3.default)(pipelineBuckets);

              case 18:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 25;
                  break;
                }

                buckets = _step.value;
                _context.next = 22;
                return _promise2.default.all(buckets);

              case 22:
                _iteratorNormalCompletion = true;
                _context.next = 18;
                break;

              case 25:
                _context.next = 31;
                break;

              case 27:
                _context.prev = 27;
                _context.t0 = _context['catch'](16);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 31:
                _context.prev = 31;
                _context.prev = 32;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 34:
                _context.prev = 34;

                if (!_didIteratorError) {
                  _context.next = 37;
                  break;
                }

                throw _iteratorError;

              case 37:
                return _context.finish(34);

              case 38:
                return _context.finish(31);

              case 39:
                _context.next = 41;
                return this.generateTiles(inputPath, pipeline);

              case 41:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[16, 27, 31, 39], [32,, 34, 38]]);
      }));

      function slice(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return slice;
    }()
  }, {
    key: 'generateTiles',
    value: function generateTiles(inputPath, pipeline) {
      return new _promise2.default(function (resolve, reject) {
        var readableStream = fs.createReadStream(inputPath);
        readableStream.pipe(pipeline).on('finish', resolve).on('error', reject);
      });
    }

    // Dont worry, we're not reading the file here
    // Simply grabbing metadata

  }, {
    key: 'getMetaData',
    value: function getMetaData(inputPath) {
      return sharp(inputPath).metadata();
    }
  }, {
    key: 'generateOffset',
    value: function generateOffset(level, hPos, vPos, _pipeline, h, v) {
      var hOffset = hPos * 256;
      var vOffset = vPos * 256;
      var writableStreamForTile = fs.createWriteStream(path.join(__dirname, '../output/' + level + '/' + hOffset + '_' + vOffset + '.jpg'));
      return _pipeline.clone().extract({
        left: hPos * 256,
        top: vPos * 256,
        width: h || 256,
        height: v || 256
      }).pipe(writableStreamForTile);
    }
  }, {
    key: 'bucket',
    value: function bucket(array, bucketSize) {
      var buckets = [];
      var start = 0;
      var end = 0;
      while (end !== array.length) {
        start = end;
        end = Math.min(array.length, end + bucketSize);
        buckets.push(array.slice(start, end));
      }
      return buckets;
    }
  }]);
  return TileSlicer;
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UaWxlU2xpY2VyLmpzIl0sIm5hbWVzIjpbIm9zIiwicmVxdWlyZSIsImZzIiwic2hhcnAiLCJwYXRoIiwiVGlsZVNsaWNlciIsImNvcmVzQ291bnQiLCJjcHVzIiwibGVuZ3RoIiwiY29uY3VycmVuY3kiLCJpbnB1dFBhdGgiLCJsZXZlbCIsIkVycm9yIiwiZ2V0TWV0YURhdGEiLCJtZXRhRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsImV4aXN0c1N5bmMiLCJqb2luIiwiX19kaXJuYW1lIiwibWtkaXJTeW5jIiwiaFNpemUiLCJNYXRoIiwiY2VpbCIsInZTaXplIiwicGlwZWxpbmUiLCJwaXBlbGluZVByb21pc2VzIiwicHVzaCIsImdlbmVyYXRlT2Zmc2V0IiwiaSIsImoiLCJlbmRIIiwiZW5kViIsImgiLCJ2IiwicGlwZWxpbmVCdWNrZXRzIiwiYnVja2V0IiwiYnVja2V0cyIsImFsbCIsImdlbmVyYXRlVGlsZXMiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGFibGVTdHJlYW0iLCJjcmVhdGVSZWFkU3RyZWFtIiwicGlwZSIsIm9uIiwibWV0YWRhdGEiLCJoUG9zIiwidlBvcyIsIl9waXBlbGluZSIsImhPZmZzZXQiLCJ2T2Zmc2V0Iiwid3JpdGFibGVTdHJlYW1Gb3JUaWxlIiwiY3JlYXRlV3JpdGVTdHJlYW0iLCJjbG9uZSIsImV4dHJhY3QiLCJsZWZ0IiwidG9wIiwiYXJyYXkiLCJidWNrZXRTaXplIiwic3RhcnQiLCJlbmQiLCJtaW4iLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBS0MsUUFBUSxJQUFSLENBQVg7QUFDQSxJQUFNQyxLQUFLRCxRQUFRLElBQVIsQ0FBWDtBQUNBLElBQU1FLFFBQVFGLFFBQVEsT0FBUixDQUFkO0FBQ0EsSUFBTUcsT0FBT0gsUUFBUSxNQUFSLENBQWI7O0lBRWFJLFUsV0FBQUEsVTtBQUNYLHdCQUFj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TUFBTU8sU0FBTixFQUFpQnNDLFFBQWpCLEVBQVA7QUFDRDs7O21DQUVjckMsSyxFQUFPc0MsSSxFQUFNQyxJLEVBQU1DLFMsRUFBV2hCLEMsRUFBR0MsQyxFQUFHO0FBQ2pELFVBQU1nQixVQUFVSCxPQUFPLEdBQXZCO0FBQ0EsVUFBTUksVUFBVUgsT0FBTyxHQUF2QjtBQUNBLFVBQU1JLHdCQUF3QnBELEdBQUdxRCxpQkFBSCxDQUFxQm5ELEtBQUtnQixJQUFMLENBQVVDLFNBQVYsaUJBQ3BDVixLQURvQyxTQUMzQnlDLE9BRDJCLFNBQ2hCQyxPQURnQixVQUFyQixDQUE5QjtBQUVBLGFBQU9GLFVBQ0pLLEtBREksR0FFSkMsT0FGSSxDQUVJO0FBQ1BDLGNBQU1ULE9BQU8sR0FETjtBQUVQVSxhQUFLVCxPQUFPLEdBRkw7QUFHUGpDLGVBQU9rQixLQUFLLEdBSEw7QUFJUGpCLGdCQUFRa0IsS0FBSztBQUpOLE9BRkosRUFRSlUsSUFSSSxDQVFDUSxxQkFSRCxDQUFQO0FBU0Q7OzsyQkFFTU0sSyxFQUFPQyxVLEVBQVk7QUFDeEIsVUFBTXRCLFVBQVUsRUFBaEI7QUFDQSxVQUFJdUIsUUFBUSxDQUFaO0FBQ0EsVUFBSUMsTUFBTSxDQUFWO0FBQ0EsYUFBT0EsUUFBUUgsTUFBTXBELE1BQXJCLEVBQTZCO0FBQzNCc0QsZ0JBQVFDLEdBQVI7QUFDQUEsY0FBTXZDLEtBQUt3QyxHQUFMLENBQVNKLE1BQU1wRCxNQUFmLEVBQXVCdUQsTUFBTUYsVUFBN0IsQ0FBTjtBQUNBdEIsZ0JBQVFWLElBQVIsQ0FBYStCLE1BQU1LLEtBQU4sQ0FBWUgsS0FBWixFQUFtQkMsR0FBbkIsQ0FBYjtBQUNEO0FBQ0QsYUFBT3hCLE9BQVA7QUFDRCIsImZpbGUiOiJUaWxlU2xpY2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3Qgc2hhcnAgPSByZXF1aXJlKCdzaGFycCcpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxuZXhwb3J0IGNsYXNzIFRpbGVTbGljZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBjb3Jlc0NvdW50ID0gb3MuY3B1cygpLmxlbmd0aDtcbiAgICBzaGFycC5jb25jdXJyZW5jeShjb3Jlc0NvdW50KTtcbiAgfVxuXG4gIGFzeW5jIHNsaWNlKGlucHV0UGF0aCwgbGV2ZWwpIHtcbiAgICBpZiAoIWlucHV0UGF0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdXZSByZXF1aXJlIHNvbWUgaW5wdXQgdG8gc2xpY2UnKTtcbiAgICB9XG4gICAgY29uc3QgbWV0YURhdGEgPSBhd2FpdCB0aGlzLmdldE1ldGFEYXRhKGlucHV0UGF0aCk7XG4gICAgY29uc29sZS5sb2coYEltYWdlIG9mIGRpbWVuc2lvbnMgJHttZXRhRGF0YS53aWR0aH0geCAke21ldGFEYXRhLmhlaWdodH0gYXQgbGV2ZWwgJHtsZXZlbH1gKTtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMocGF0aC5qb2luKF9fZGlybmFtZSwgYC4uL291dHB1dC8ke2xldmVsfWApKSkge1xuICAgICAgZnMubWtkaXJTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsIGAuLi9vdXRwdXQvJHtsZXZlbH1gKSk7XG4gICAgfVxuICAgIGNvbnN0IGhTaXplID0gTWF0aC5jZWlsKG1ldGFEYXRhLndpZHRoIC8gMjU2KTtcbiAgICBjb25zdCB2U2l6ZSA9IE1hdGguY2VpbChtZXRhRGF0YS5oZWlnaHQgLyAyNTYpO1xuICAgIGNvbnN0IHBpcGVsaW5lID0gc2hhcnAoKTtcbiAgICBjb25zdCBwaXBlbGluZVByb21pc2VzID0gW107XG4gICAgaWYgKGhTaXplID09PSAxICYmIHZTaXplID09PSAxKSB7IC8vIFRoZXJlIGlzIG9ubHkgMSB0aWxlXG4gICAgICBwaXBlbGluZVByb21pc2VzLnB1c2godGhpcy5nZW5lcmF0ZU9mZnNldChsZXZlbCwgMCwgMCwgcGlwZWxpbmUsIG1ldGFEYXRhLndpZHRoLCBtZXRhRGF0YS5oZWlnaHQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoU2l6ZTsgKytpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdlNpemU7ICsraikge1xuICAgICAgICAgIGNvbnN0IGVuZEggPSBpID09PSBoU2l6ZSAtIDE7XG4gICAgICAgICAgY29uc3QgZW5kViA9IGogPT09IHZTaXplIC0gMTtcbiAgICAgICAgICBsZXQgaDtcbiAgICAgICAgICBsZXQgdjtcbiAgICAgICAgICBpZiAoZW5kSCkge1xuICAgICAgICAgICAgaCA9IG1ldGFEYXRhLndpZHRoICUgMjU2O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZW5kVikge1xuICAgICAgICAgICAgdiA9IG1ldGFEYXRhLmhlaWdodCAlIDI1NjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGlwZWxpbmVQcm9taXNlcy5wdXNoKHRoaXMuZ2VuZXJhdGVPZmZzZXQobGV2ZWwsIGksIGosIHBpcGVsaW5lLCBoLCB2KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwaXBlbGluZUJ1Y2tldHMgPSB0aGlzLmJ1Y2tldChwaXBlbGluZVByb21pc2VzLCA1MCk7XG4gICAgZm9yIChjb25zdCBidWNrZXRzIG9mIHBpcGVsaW5lQnVja2V0cykge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYnVja2V0cyk7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuZ2VuZXJhdGVUaWxlcyhpbnB1dFBhdGgsIHBpcGVsaW5lKTtcbiAgfVxuXG4gIGdlbmVyYXRlVGlsZXMoaW5wdXRQYXRoLCBwaXBlbGluZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCByZWFkYWJsZVN0cmVhbSA9IGZzLmNyZWF0ZVJlYWRTdHJlYW0oaW5wdXRQYXRoKTtcbiAgICAgIHJlYWRhYmxlU3RyZWFtXG4gICAgICAgIC5waXBlKHBpcGVsaW5lKVxuICAgICAgICAub24oJ2ZpbmlzaCcsIHJlc29sdmUpXG4gICAgICAgIC5vbignZXJyb3InLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRG9udCB3b3JyeSwgd2UncmUgbm90IHJlYWRpbmcgdGhlIGZpbGUgaGVyZVxuICAvLyBTaW1wbHkgZ3JhYmJpbmcgbWV0YWRhdGFcbiAgZ2V0TWV0YURhdGEoaW5wdXRQYXRoKSB7XG4gICAgcmV0dXJuIHNoYXJwKGlucHV0UGF0aCkubWV0YWRhdGEoKTtcbiAgfVxuXG4gIGdlbmVyYXRlT2Zmc2V0KGxldmVsLCBoUG9zLCB2UG9zLCBfcGlwZWxpbmUsIGgsIHYpIHtcbiAgICBjb25zdCBoT2Zmc2V0ID0gaFBvcyAqIDI1NjtcbiAgICBjb25zdCB2T2Zmc2V0ID0gdlBvcyAqIDI1NjtcbiAgICBjb25zdCB3cml0YWJsZVN0cmVhbUZvclRpbGUgPSBmcy5jcmVhdGVXcml0ZVN0cmVhbShwYXRoLmpvaW4oX19kaXJuYW1lLFxuICAgICAgYC4uL291dHB1dC8ke2xldmVsfS8ke2hPZmZzZXR9XyR7dk9mZnNldH0uanBnYCkpO1xuICAgIHJldHVybiBfcGlwZWxpbmVcbiAgICAgIC5jbG9uZSgpXG4gICAgICAuZXh0cmFjdCh7XG4gICAgICAgIGxlZnQ6IGhQb3MgKiAyNTYsXG4gICAgICAgIHRvcDogdlBvcyAqIDI1NixcbiAgICAgICAgd2lkdGg6IGggfHwgMjU2LFxuICAgICAgICBoZWlnaHQ6IHYgfHwgMjU2LFxuICAgICAgfSlcbiAgICAgIC5waXBlKHdyaXRhYmxlU3RyZWFtRm9yVGlsZSk7XG4gIH1cblxuICBidWNrZXQoYXJyYXksIGJ1Y2tldFNpemUpIHtcbiAgICBjb25zdCBidWNrZXRzID0gW107XG4gICAgbGV0IHN0YXJ0ID0gMDtcbiAgICBsZXQgZW5kID0gMDtcbiAgICB3aGlsZSAoZW5kICE9PSBhcnJheS5sZW5ndGgpIHtcbiAgICAgIHN0YXJ0ID0gZW5kO1xuICAgICAgZW5kID0gTWF0aC5taW4oYXJyYXkubGVuZ3RoLCBlbmQgKyBidWNrZXRTaXplKTtcbiAgICAgIGJ1Y2tldHMucHVzaChhcnJheS5zbGljZShzdGFydCwgZW5kKSk7XG4gICAgfVxuICAgIHJldHVybiBidWNrZXRzO1xuICB9XG59XG4iXX0=