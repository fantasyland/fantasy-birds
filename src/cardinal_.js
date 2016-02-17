const curry = require('fantasy-helpers').curry


//# cardinal_ :: (c -> a -> d) -> (b -> c) -> a -> b -> d
//.
//. C' combinator
//.
//. ```js
//. > cardinal_(x => y => x * y)(x => x + 1)(2)(3)
//. 8
//. ```
const cardinal_ = curry((f,  g,  x,  y) => f(g(y))(x))

module.exports = cardinal_
