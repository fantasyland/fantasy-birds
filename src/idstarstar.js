const curry = require('fantasy-helpers').curry


//# idstarstar :: (a -> b -> c) -> a -> b -> c
//.
const idstarstar = curry((f,  x,  y) => f(x)(y))

module.exports = idstarstar
