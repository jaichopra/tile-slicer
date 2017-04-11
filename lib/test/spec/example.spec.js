'use strict';

var _should = require('should');

var should = _interopRequireWildcard(_should);

var _moduleFile = require('../../moduleFile');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('Set of unit test cases', function () {
  it('returns the string hi', function (done) {
    _moduleFile.MyModule.someFunction().should.equal('hi');
    done();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0L3NwZWMvZXhhbXBsZS5zcGVjLmpzIl0sIm5hbWVzIjpbInNob3VsZCIsImRlc2NyaWJlIiwiaXQiLCJzb21lRnVuY3Rpb24iLCJlcXVhbCIsImRvbmUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0lBQVlBLE07O0FBQ1o7Ozs7QUFFQUMsU0FBUyx3QkFBVCxFQUFtQyxZQUFNO0FBQ3ZDQyxLQUFHLHVCQUFILEVBQTRCLGdCQUFRO0FBQ2xDLHlCQUFTQyxZQUFULEdBQXdCSCxNQUF4QixDQUErQkksS0FBL0IsQ0FBcUMsSUFBckM7QUFDQUM7QUFDRCxHQUhEO0FBSUQsQ0FMRCIsImZpbGUiOiJleGFtcGxlLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBzaG91bGQgZnJvbSAnc2hvdWxkJztcbmltcG9ydCB7IE15TW9kdWxlIH0gZnJvbSAnLi4vLi4vbW9kdWxlRmlsZSc7XG5cbmRlc2NyaWJlKCdTZXQgb2YgdW5pdCB0ZXN0IGNhc2VzJywgKCkgPT4ge1xuICBpdCgncmV0dXJucyB0aGUgc3RyaW5nIGhpJywgZG9uZSA9PiB7XG4gICAgTXlNb2R1bGUuc29tZUZ1bmN0aW9uKCkuc2hvdWxkLmVxdWFsKCdoaScpO1xuICAgIGRvbmUoKTtcbiAgfSk7XG59KTtcbiJdfQ==