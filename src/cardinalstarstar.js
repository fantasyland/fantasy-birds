const curry = require('fantasy-helpers').curry


//# cardinalstarstar :: (a -> b -> d -> c -> e) -> a -> b -> c -> d -> e
//.
//. C** combinator - cardinal twice removed.
//.
//. ```js
//. > cardinalstarstar(a => b => separator => postfix => a + separator + b + postfix)('fantasy')('birds')('!')('-')
//. 'fantasy-birds!'
//. ```
const cardinalstarstar = curry((f, s, t, u, v) => f(s)(t)(v)(u))

module.exports = cardinalstarstar
