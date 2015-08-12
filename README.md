# Install
```
meteor add poetic:meteor-promise-test-extension
```

# Helpers
- Promise.wait([Number timeout])
- Promise.find(String jquerySelector)
- .wait([Number timeout]) # .wati will pass the previous result to the next then
- .find(String jquerySelector)
- .finally(Function fn)

# Config
  These are default configs, you can change them as you wish
  ```
  Promise.WAIT_UNTILL_INTERVAL = 500
  Promise.WAIT_UNTILL_TIMEOUT  = 3000
  ```

# Warning
This package will NOT be included in the production bundle since I set the
```debugOnly``` flag to true.
