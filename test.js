var tap = require('tape')
var getCenterPixel = require('./')

tap.test('does the 3x3 thing', function (t) {
  t.plan(1)
  var ex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 255, 254, 253, 252, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  t.deepEqual(getCenterPixel(ex, 3, 3), {r: 255, g: 254, b: 253, a: 252})
})

tap.test('does the 4x4 thing as expected, i guess....', function (t) {
  t.plan(1)
  var ex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 2, 0, 6, 0, 3, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 1, 0, 5, 4, 3, 2, 1, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  t.deepEqual(getCenterPixel(ex, 4, 4), {r: 5, g: 4, b: 3, a: 2})
})
