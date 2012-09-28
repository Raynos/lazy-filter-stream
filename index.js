var proxy = require("proxy-stream")

module.exports = filter

function filter(stream, predicate) {
    return proxy(stream, transformation)

    function transformation(chunk, next) {
        var keep = predicate(chunk)
        if (keep) {
            next(chunk)
        }
    }
}
