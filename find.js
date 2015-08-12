Utils.addMethodToPromise('find', function (selector) {
  return Utils.waitUntill(function () {
    check(selector, String)
    var element = $(selector)
    return Utils.lengthShouldBeOne(element, selector) && element
  })
})
