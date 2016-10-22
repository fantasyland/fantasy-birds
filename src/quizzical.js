const curry = require('fantasy-helpers').curry


//# quizzical :: a -> (b -> c) -> (a -> b) -> c
//.
//. Q2 combinator - quizzical bird.
//.
//. ```js
//. > quizzical(7)(b => b * 2)(a => a + 2)
//. 18
//. ```
const quizzical = curry((x, f, g) => f(g(x)))

module.exports = quizzical
