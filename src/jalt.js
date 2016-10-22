const curry = require('fantasy-helpers').curry


//# jalt :: (a -> c) -> a -> b -> c
//.
//. Alternative J combinator
//.
//. ```js
//. > jalt(a => a + 2)(1)(2)
//. 3
//. ```
const jalt = curry((f, x, y) => f(x))

module.exports = jalt
