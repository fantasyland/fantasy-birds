const curry = require('fantasy-helpers').curry


//# quacky :: a -> (a -> b) -> (b -> c) -> c
//.
//. Q4 combinator - quacky bird.
//.
//. ```js
//. > quacky(4)(a => a + 2)(b => b / 2)
//. 3
//. ```
const quacky = curry((x, f, g) => g(f(x)))

module.exports = quacky
