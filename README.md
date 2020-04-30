# json-circular-stringify

[![GitHub package.json version](https://img.shields.io/github/package-json/v/kbaylosis/json-circular-stringify)](https://www.npmjs.com/package/json-circular-stringify)
[![Build Status](https://travis-ci.org/kbaylosis/json-circular-stringify.svg?branch=master)](https://travis-ci.org/kbaylosis/json-circular-stringify)

Overrides JSON's stringify to handle circular references

# Installation
```
npm i --save json-circular-stringify
```

# Usage
```
require("json-circular-stringify");

// JSON.stringify() is now overridden at this point
// and you can use it as you normally would
// without minding circular references any longer

var obj = {name: "Alice"};
obj.self = obj;
var json = JSON.stringify(obj);

console.log(json); 

// Outputs '{"name":"Alice","self":"[Circular ~]"}'
```

# Details

Makes use of [json-stringify-safe](https://www.npmjs.com/package/json-stringify-safe) but takes care of overriding *JSON.stringify()* itself. The original *JSON.stringify()* is renamed to *JSON.origStringify()* in case you missed it.
