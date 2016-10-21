const curry = require('fantasy-helpers').curry


//# kite :: a -> b -> b
//.
//. Ki - kite. Corresponds to the encoding of `false` in the lambda calculus.
//.
//. ```js
//. > kite(1)(3)
//. 3
//. ```
const kite = curry((x, y) => y)

module.exports = kite
