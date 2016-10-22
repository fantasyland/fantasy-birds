const curry = require('fantasy-helpers').curry


//# idstar :: (a -> b) -> a -> b
//.
//.  I* combinator - identity bird once removed - [`applicator`](#applicator--a---b---a---b)
//.
//. ```js
//. > idstar(x => x + 1)(3)
//. 4
//. ```
const idstar = curry((f, x) => f(x))

module.exports = idstar
