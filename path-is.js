Utils.addMethodToPromise('pathIs', function (path) {
  check(path, String)

  var pathIs = function () {
    return path === window.location.pathname
  }

  var timeoutReason = '[pathIs] path is not changed to ' + path

  return Utils.waitUntill(pathIs, timeoutReason)
})
