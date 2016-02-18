const curry = require('fantasy-helpers').curry


//# idstar :: (a -> b) -> a -> b
//.
const idstar = curry((f, x) => f(x))

module.exports = idstar
