const curry = require('fantasy-helpers').curry


//# finchstar :: (c -> b -> a -> d) -> a -> b -> c -> d
//.
//. F* combinator - finch once removed
//.
//. ```js
//. > finchstar(a => separator => b => a + separator + b)('birds')('-')('fantasy')
//. 'fantasy-birds'
//. ```
const finchstar = curry((f, x, y, z) => f(z)(y)(x))

module.exports = finchstar
