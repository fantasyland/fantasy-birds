const curry = require('fantasy-helpers').curry


//# dove :: (a -> c -> d) -> a -> (b -> c) -> b -> d
//.
const dove = curry((f, x, g, y) => f(x)(g(y)))

module.exports = dove
