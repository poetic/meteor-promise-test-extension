Utils.addMethodToPromise = function (name, fn) {
  check(name, String)

  Promise[name] = fn

  Promise.prototype[name] = function () {
    var args = arguments

    return this.then(function(previous){
      return fn.apply(previous, args)
    })
  }
}
