const curry = require('fantasy-helpers').curry


//# finch :: a -> b -> (b -> a -> c) -> c
//.
const finch = curry((x, y, f) => f(y)(x))

module.exports = finch
