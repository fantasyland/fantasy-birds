const curry = require('fantasy-helpers').curry


//# goldfinch :: (b -> c -> d) -> (a -> c) -> a -> b -> d
//.
//. G combinator - goldfinch.
//.
//. ```js
//. > goldfinch(b => c => b + c)(a => a * 2)(3)(4)
//. 10
//. ```
const goldfinch = curry((f, g, x, y) => f(y)(g(x)))

module.exports = goldfinch
