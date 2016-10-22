const curry = require('fantasy-helpers').curry


//# finchstarstar :: (a -> d -> c -> b -> e) -> a -> b -> c -> d -> e
//.
//. F** combinator - finch twice removed.
//.
//. ```js
//. > finchstarstar(a => postfix => b => separator => a + separator + b + postfix)('fantasy')('-')('birds')("!")
//. 'fantasy-birds!'
//. ```
const finchstarstar = curry((f, s, t, u, v) => f(s)(v)(u)(t))

module.exports = finchstarstar
