const curry = require('fantasy-helpers').curry


//# cardinalstarstar :: (a -> b -> d -> c -> e) -> a -> b -> c -> d -> e
//.
const cardinalstarstar = curry((f, s, t, u, v) => f(s)(t)(v)(u))

module.exports = cardinalstarstar
