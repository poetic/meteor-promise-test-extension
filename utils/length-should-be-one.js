Utils.lengthShouldBeOne = function (array, selector) {
  var length = array.length

  if (length === 0) {
    return false
  } else if (length === 1) {
    return true
  } else {
    throw new Meteor.Error(
      'more-then-one-element',
      length + ' elements are found for selector ' + selector
    )
  }
}
