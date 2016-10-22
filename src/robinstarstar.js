const curry = require('fantasy-helpers').curry


//# robinstarstar :: (a -> c -> d -> b -> e) -> a -> b -> c -> d -> e
//.
//. R** combinator - robin twice removed.
//.
//. ```js
//. > robinstarstar(a => c => d => b => a + b + c + d)("fantasy")("-")("birds")("!")
//. 'fantasy-birds!'
//. ```
const robinstarstar = curry((f, s, t, u, v) => f(s)(u)(v)(t))

module.exports = robinstarstar
