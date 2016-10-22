const curry = require('fantasy-helpers').curry


//# quixotic :: (b -> c) -> a -> (a -> b) -> c
//.
//. Q1 combinator - quixotic bird.
//.
//. ```js
//. > quixotic(b => b * 2)(7)(a => a + 2)
//. 18
//. ```
const quixotic = curry((f, x, g) => f(g(x)))

module.exports = quixotic
