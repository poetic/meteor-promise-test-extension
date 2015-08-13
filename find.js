Utils.addMethodToPromise('find', function (selector) {
  var find = function () {
    check(selector, String)
    var element = $(selector)
    return Utils.lengthShouldBeOne(element, selector) && element
  }

  var timeoutReason = '[find] can not find ' + selector

  return Utils.waitUntill(find, timeoutReason)
})
