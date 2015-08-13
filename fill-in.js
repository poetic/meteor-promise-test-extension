Utils.addMethodToPromise('fillIn', function (selector, value) {
  return Utils.waitUntill(function () {
    check(selector, String)
    check(value, String)
    var element = $(selector)
    return Utils.lengthShouldBeOne(element, selector) && element.val(value)
  })
})
