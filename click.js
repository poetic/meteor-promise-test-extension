Utils.addMethodToPromise('click', function (selector) {
  var click = function () {
    check(selector, String)
    var element = $(selector)
    return Utils.lengthShouldBeOne(element, selector) && element.click()
  }

  var timeoutReason = '[click] can not find ' + selector

  return Utils.waitUntill(click, timeoutReason)
})
