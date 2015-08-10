Promise.FIND_TIMEOUT  = 3000
Promise.FIND_INTERVAL = 500

Promise.find = function(selector) {
  check(selector, String)

  return newFindPromise(selector)
}

Promise.prototype.find = function(selectorOverwrite) {
  return this.then(function(result){
    var selector = selectorOverwrite || result
    check(selector, String)

    return newFindPromise(selector)
  })
}

function newFindPromise (selector) {
  return new Promise(function (resolve, reject) {
    var currentElements = $(selector)
    if (currentElements.length) {
      resolve(currentElements)
      return
    }

    var timer = 0

    var intervalId = Meteor.setInterval(function () {
      timer += Promise.FIND_INTERVAL

      var elements = $(selector)
      if (elements.length) {
        Meteor.clearInterval(intervalId)
        resolve(elements)
      } else if (timer > Promise.FIND_INTERVAL) {
        Meteor.clearInterval(intervalId)
        reject()
      }
    }, Promise.FIND_INTERVAL)
  })
}
