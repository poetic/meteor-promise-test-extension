Package.describe({
  name: 'poetic:promise-test-extension',
  version: '0.0.3',
  summary: 'A collection of promise helpers/extensions for testing.',
  git: 'https://github.com/poetic/meteor-promise-test-extension',
  documentation: 'README.md',
  debugOnly: true
})

Package.onUse(function(api) {
  var CLIENT = 'client'
  var SERVER = 'server'
  var EVERYWHERE = ['client', 'server']

  api.versionsFrom('1.1.0.3')

  api.use('jquery')
  api.use('check')

  api.add_files('constants.js', CLIENT)
  api.add_files('finally.js', CLIENT)
  api.add_files('utils/utils.js', CLIENT)
  api.add_files('utils/wait-untill.js', CLIENT)
  api.add_files('utils/length-should-be-one.js', CLIENT)
  api.add_files('utils/add-method-to-promise.js', CLIENT)
  api.add_files('wait.js', CLIENT)
  api.add_files('find.js', CLIENT)
  api.add_files('path-is.js', CLIENT)
  api.add_files('click.js', CLIENT)

})

Package.onTest(function(api) {
  api.use('tinytest')
  api.use('poetic:promise-test-extension')
  // api.addFiles('promise-test-extension-tests.js')
})
