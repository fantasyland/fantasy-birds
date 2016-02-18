const curry = require('fantasy-helpers').curry


//# goldfinch :: (b -> c -> d) -> (a -> c) -> a -> b -> d
//.
const goldfinch = curry((f, g, x, y) => f(y)(g(x)))

module.exports = goldfinch
