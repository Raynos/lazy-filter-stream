# lazy-filter-stream

Wrap a stream with a filtering

## Example

```
var from = require("read-stream")
    , to = require("write-stream")
    , filter = require("lazy-filter-stream")
    , assert = require("assert")
    , list = []

// filter(stream, iterator)
var odds = filter(from([1,2,3,4,5]), function (value) {
    return value % 2
})

odds.pipe(to(list, function () {
    // the odd values
    assert.deepEqual(list, [1, 3, 5])
    console.log("list", list)
}))
```

## Installation

`npm install lazy-filter-stream`

## Contributors

 - Raynos

## MIT Licenced