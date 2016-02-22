const curry = require('fantasy-helpers').curry


//# dovekie :: (c -> d -> e) -> (a -> c) -> a -> (b -> d) -> b -> e
//.
//. D2 combinator
//.
//. ```js
//. > dovekie(prefix => str => prefix + str)(x => x.toUpperCase())('fantasy-')(x => x.toLowerCase())('BIRDS')
//. 'FANTASY-birds'
//. ```
const dovekie = curry((f, g, x, h, y) => f(g(x))(h(y)))

module.exports = dovekie
