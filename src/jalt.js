const curry = require('fantasy-helpers').curry


//# jalt :: (a -> c) -> a -> b -> c
//.
const jalt = curry((f,  x,  y) => f(x))

module.exports = jalt
