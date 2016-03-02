const curry = require('fantasy-helpers').curry


//# eaglebald :: (e -> f -> g) -> (a -> b -> e) -> a -> b -> (c -> d -> f) -> c -> d -> g
//.
//. E^ combinator
//.
//. ```js
//. > eaglebald(x => y => y + x)(a => b => b + a)('!')('birds')(a => b => a + b)('fantasy')('-')
//. 'fantasy-birds!'
//. ```
const eaglebald = curry((f, g, s, t, h, u, v) => f(g(s)(t))(h(u)(v)))

module.exports = eaglebald
