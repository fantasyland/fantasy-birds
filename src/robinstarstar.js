const curry = require('fantasy-helpers').curry


//# robinstarstar :: (a -> c -> d -> b -> e) -> a -> b -> c -> d -> e
//.
const robinstarstar = curry((f, s, t, u, v) => f(s)(u)(v)(t))

module.exports = robinstarstar
