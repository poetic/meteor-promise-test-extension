Utils.addMethodToPromise('fillIn', function (selector, value) {
  var fillIn = function () {
    check(selector, String)
    check(value, String)
    var element = $(selector)
    return Utils.lengthShouldBeOne(element, selector) && element.val(value)
  }

  var timeoutReason = '[fillIn] can not find ' + selector

  return Utils.waitUntill(fillIn, timeoutReason)
})
