const curry = require('fantasy-helpers').curry


//# cardinalstar :: (a -> c -> b -> d) -> a -> b -> c -> d
//.
const cardinalstar = curry((f, x, y, z) => f(x)(z)(y))

module.exports = cardinalstar
