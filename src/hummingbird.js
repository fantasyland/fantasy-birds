const curry = require('fantasy-helpers').curry


//# hummingbird :: (a -> b -> a -> c) -> a -> b -> c
//.
//. H combinator - hummingbird.
//.
//. ```js
//. > hummingbird(prefix => a => postfix => prefix + a + postfix)('!')('birds')
//. '!birds!'
//. ```

const hummingbird = curry((f, x, y) => f(x)(y)(x))

module.exports = hummingbird
