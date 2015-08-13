Package.describe({
  name: 'poetic:promise-test-extension',
  version: '0.0.4',
  summary: 'A collection of promise helpers/extensions for testing.',
  git: 'https://github.com/poetic/meteor-promise-test-extension',
  documentation: 'README.md',
  debugOnly: true
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3')

  api.use('jquery')
  api.use('check')

  api.add_files([
    'constants.js',
    'finally.js',
    'utils/utils.js',
    'utils/wait-untill.js',
    'utils/length-should-be-one.js',
    'utils/add-method-to-promise.js',
    'wait.js',
    'find.js',
    'path-is.js',
    'click.js',
    'fill-in.js'
  ], 'client')
})

Package.onTest(function(api) {
  api.use('tinytest')
  api.use('poetic:promise-test-extension')
  // api.addFiles('promise-test-extension-tests.js')
})
