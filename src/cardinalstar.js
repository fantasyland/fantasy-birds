const curry = require('fantasy-helpers').curry


//# cardinalstar :: (a -> c -> b -> d) -> a -> b -> c -> d
//.
//. C* combinator - cardinal once removed.
//.
//. ```js
//. > cardinalstar(str => prefix => postfix => prefix + str + postfix)('birds')('!')('-')
//. '-birds!'
//. ```
const cardinalstar = curry((f, x, y, z) => f(x)(z)(y))

module.exports = cardinalstar
