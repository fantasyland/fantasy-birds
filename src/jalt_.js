const curry = require('fantasy-helpers').curry


//# jalt_ :: (a -> b -> d) -> a -> b -> c -> d
//.
const jalt_ = curry((f, x, y, z) => f(x)(y))

module.exports = jalt_
