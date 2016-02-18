const curry = require('fantasy-helpers').curry


//# dickcissel :: (a -> b -> d -> e) -> a -> b -> (c -> d) -> c -> e
//.
const dickcissel = curry((f, x, y, g, z) => f(x)(y)(g(z)))

module.exports = dickcissel
