const curry = require('fantasy-helpers').curry


//# dickcissel :: (a -> b -> d -> e) -> a -> b -> (c -> d) -> c -> e
//.
//. D1 combinator
//.
//. ```js
//. > dickcissel(prefix => postfix => str => prefix + str + postfix)('-')('!')(x => x.toUpperCase())('birds')
//. '-BIRDS!'
//. ```
const dickcissel = curry((f, x, y, g, z) => f(x)(y)(g(z)))

module.exports = dickcissel
