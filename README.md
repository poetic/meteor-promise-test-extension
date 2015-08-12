# Install
```
meteor add poetic:meteor-promise-test-extension
```

# Helpers
- Promise.wait([Number timeout])
- .wait([Number timeout])  
  The defalut timeout is 3000ms, you can set it by ```Promise.TIMEOUT = 1000```
- Promise.find(String jquerySelector)
- .find([String jquerySelector])  
  .find will smartly wait for at most 3000ms for the selected element to appear,
  you can change the defalut value by ```Promise.FIND_TIMEOUT = 1000```
- .finally([Function fn])

# Warning
This package will NOT be included in the production bundle since I set the
```debugOnly``` flag to true.
