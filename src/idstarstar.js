const curry = require('fantasy-helpers').curry


//# idstarstar :: (a -> b -> c) -> a -> b -> c
//.
//. I** combinator - identity bird twice removed
//.
//. ```js
//. > idstarstar(a => b => a + b)(1)(2)
//. 3
//. ```
const idstarstar = curry((f, x, y) => f(x)(y))

module.exports = idstarstar
