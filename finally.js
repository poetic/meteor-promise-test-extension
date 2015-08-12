Promise.prototype.finally = function (fn) {
  return this.then(fn, fn)
}
