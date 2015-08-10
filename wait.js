Promise.TIMEOUT = 3000

Promise.wait = function(timeout) {
  timeout = timeout || Promise.TIMEOUT

  return newWaitPromise(timeout)
}

Promise.prototype.wait = function(timeout) {
  return this.then(function(result){
    timeout = timeout || Promise.TIMEOUT

    return newWaitPromise(timeout, result)
  })
}

function newWaitPromise (timeout, result) {
  return new Promise(function(resolve){
    setTimeout(
      function() { resolve(result) },
      timeout
    )
  })
}
