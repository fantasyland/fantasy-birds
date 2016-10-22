const curry = require('fantasy-helpers').curry


//# phoenix :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
//.
//. (Big) Phi combinator - phoenix - [`starling_`](#starling_--b---c---d---a---b---a---c---a---d)
//.
//. ```js
//. > phoenix(b => c => b - c)(a => a + 1)(a => a - 1)(5)
//. 2
//. ```
const phoenix = curry((f, g, h, x) => f(g(x))(h(x)))

module.exports = phoenix
