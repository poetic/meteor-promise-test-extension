/**
 * @return {Promise}
 */
Utils.waitUntill = function (fn) {
  return new Promise(function (resolve, reject) {
    var firstResult = fn()
    if (firstResult) {
      resolve(firstResult)
      return
    }

    var timer = 0

    var intervalId = Meteor.setInterval(function () {
      timer += Promise.WAIT_UNTILL_INTERVAL

      var result = fn()
      if (result) {
        Meteor.clearInterval(intervalId)
        resolve(result)
      } else if (timer > Promise.WAIT_UNTILL_TIMEOUT) {
        Meteor.clearInterval(intervalId)
        var explanation = 'Promise takes more than ' +
          Promise.WAIT_UNTILL_TIMEOUT +
          ' milliseconds'

        reject(new Meteor.Error('time-out', explanation))
      }
    }, Promise.WAIT_UNTILL_INTERVAL)
  })
}
