const curry = require('fantasy-helpers').curry


//# eagle :: (a -> d -> e) -> a -> (b -> c -> d) -> b -> c -> e
//.
const eagle = curry((f, x, g, y, z) => f(x)(g(y)(z)))

module.exports = eagle
