get-center-pixel
----------------

given an array of pixel data not unlike that returned by `canvasContext.getImageData().data` and a width and a height, returns the data for the center pixel as `{r: 0-255, g: 0-255, b: 0-255, a: 0-255}`

[![NPM](https://nodei.co/npm/get-center-pixel.png)](https://nodei.co/npm/get-center-pixel/) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) [![Build Status](https://secure.travis-ci.org/coleww/get-center-pixel.png)](http://travis-ci.org/coleww/get-center-pixel)

### EXAMPLE

```
  /// ... canvas/context setup code up here ... \\\\\\
  var width = canvas.width
  var height = canvas.height
  var pixels = ctx.getImageData(0, 0, width, height).data
  var getCenterPixel = require('get-center-pixel')
  getCenterPixel(pixels, widht, height)
  // => {r: 100, g: 212, b: 53, a: 183}
  // now do something with that pixel
```
