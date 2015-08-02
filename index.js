module.exports = function (pixels, w, h) {
  var ri = ~~(h / 2) * (w * 4) + (~~(w / 2) * 4)
  return {r: pixels[ri], g: pixels[ri + 1], b: pixels[ri + 2], a: pixels[ri + 3]}
}
