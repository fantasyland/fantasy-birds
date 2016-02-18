const curry = require('fantasy-helpers').curry


//# robin :: a -> (b -> a -> c) -> b -> c
//.
const robin = curry((x, f, y) => f(y)(x))

module.exports = robin
