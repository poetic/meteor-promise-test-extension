Utils.addMethodToPromise('pathIs', function (path) {
  check(path, String)

  return Utils.waitUntill(function () {
    return path === window.location.pathname
  })
})
