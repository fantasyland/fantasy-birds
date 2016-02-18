const curry = require('fantasy-helpers').curry


//# warblerstarstar :: (a -> b -> c -> c -> d) -> a -> b -> c -> d
//.
const warblerstarstar = curry((f, x, y, z) => f(x)(y)(z)(z))

module.exports = warblerstarstar
