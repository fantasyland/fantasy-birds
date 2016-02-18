const curry = require('fantasy-helpers').curry


//# warbler1 :: a -> (a -> a -> b) -> b
//.
const warbler1 = curry((x, f) => f(x)(x))

module.exports = warbler1
