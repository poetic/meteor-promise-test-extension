Promise.prototype.finally = function (done) {
  // NOTE: Since mocha does not accept an argument for done,
  // we do not pass anything to done in the success callback
  return this.then(function () { done() }, done)
}
