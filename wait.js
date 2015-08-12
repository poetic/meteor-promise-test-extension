Utils.addMethodToPromise('wait', function (timeout) {
  var previous = this
  timeout = timeout || Promise.WAIT_UNTILL_TIMEOUT
  check(timeout, Number)
  return new Promise(function(resolve){
    setTimeout(
      function() { resolve(previous) },
      timeout
    )
  })
})
