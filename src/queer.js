const curry = require('fantasy-helpers').curry


//# queer :: (a -> b) -> (b -> c) -> a -> c
//.
//.Q combinator - queer bird.
//.
//. ```js
//. > queer(a => a + 2)(b => b * 2)(7)
//. 18
//. ```
const queer = curry((f, g, x) => g(f(x)))

module.exports = queer
