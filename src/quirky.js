const curry = require('fantasy-helpers').curry


//# quirky :: (a -> b) -> a -> (b -> c) -> c
//.
const quirky = curry((f,  x,  g) => g(f(x)))

module.exports = quirky
