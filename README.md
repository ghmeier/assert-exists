# Assert Exists ![Travis Build](https://travis-ci.org/ghmeier/assert-exists.svg?branch=master)
A package for consistently asserting if a variable exists.

# Usage
---
1. Install.
`npm install assert-exists --save`

2. Use it.
```javascript
var a = require("assert-exists");

var errorMsg = a.msg("MyPackage");

function MyPackage(options) {
  a.exists(options, errorMsg('options'));
  a.exists(options.someString, errorMsg('someString'), 'string');
}
```

# Definition
---
* `.exists(value, errorMessage, *type)`
  * Checks to see if value is not null, AND `typeof` type (if it's provided), otherwise throws `AssertionError: "errorMessage"`.
* `.msg(packageString)`
  * Returns a function that takes one argument and returns a string like: 
```
"ERROR: Expected {1} to be passed into {packageString}."
```

# Why
---
When passing configs into constructors, I ran into a problem where the same code was copied and pasted lots of times. That was annoying, verbose and error prone. It looked like this:
```javascript
function MyPackage(configs) {
  assert(configs, "Expected configs to be passed into MyPackage");
  assert(
    typeof configs.enabled === 'bool',
    "Expected configs to be passed into MyPackage" // not correct
  );
  this.enabled = configs.enabled;
  
  assert(
    configs.db && typeof configs.db.host === 'string',
    'Expected host to be passed into MyPackage' // not really correct
  );
  assert(
    configs.db && typeof configs.db.port === 'string',
    'Expected host to be passed into MyPackage' // wrong string
  );
}
```
This sucks. So, I made the package to constrict my ability to mess this stuff up, and take away some of the copy-pasta incentive.

Now we have one function to check if it exists, and one to get an error message. Simple.

---
`a.exists(finished, a.msg('README')('finished'), 'bool');`
