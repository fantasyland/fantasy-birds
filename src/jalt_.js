const curry = require('fantasy-helpers').curry


//# jalt_ :: (a -> b -> d) -> a -> b -> c -> d
//.
//. J' combinator
//.
//. ```js
//. > jalt_(a => b => a * b)(1)(2)(3)
//. 2
//. ```
const jalt_ = curry((f, x, y, z) => f(x)(y))

module.exports = jalt_
