const curry = require('fantasy-helpers').curry


//# jay :: (a -> b -> b) -> a -> b -> a -> b
//.
const jay = curry((f,  x,  y,  z) => f(x)(f(z)(y)))

module.exports = jay
