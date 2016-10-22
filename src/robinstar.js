const curry = require('fantasy-helpers').curry


//# robinstar :: (b -> c -> a -> d) -> a -> b -> c -> d
//.
//. R* combinator - robin once removed.
//.
//. ```js
//. > robinstar( b => c => a => a + b + c )("fantasy")("-")("birds")
//. 'fantasy-birds'
//. ```
const robinstar = curry((f, x, y, z) => f(y)(z)(x))

module.exports = robinstar
