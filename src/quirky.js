const curry = require('fantasy-helpers').curry


//# quirky :: (a -> b) -> a -> (b -> c) -> c
//.
//. Q3 combinator - quirky bird.
//.
//. ```js
//. > quirky(a => a + 2)(7)(b => b * 2)
//. 18
//. ```
const quirky = curry((f, x, g) => g(f(x)))

module.exports = quirky
