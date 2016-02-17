const curry = require('fantasy-helpers').curry


//# warbler :: (a -> a -> b) -> a -> b
//.
const warbler = curry((f,  x) => f(x)(x))

module.exports = warbler
