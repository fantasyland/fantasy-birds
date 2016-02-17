const curry = require('fantasy-helpers').curry


//# bluebird_ :: (a -> c -> d) -> a -> (b -> c) -> b -> d
//.
//. B' combinator
//.
//. ```js
//. > bluebird_(x => y => x * y)(2)(x => x + 1)(2)
//. 6
//. ```
const bluebird_ = curry((f,  x,  g,  y) => f(x)(g(y)))

module.exports = bluebird_
