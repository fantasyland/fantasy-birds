const curry = require('fantasy-helpers').curry


//# owl :: ((a -> b) -> a) -> (a -> b) -> b
//.
//. O combinator - owl.
//.
//. ```js
//. > owl(x => x(3))(y => y + 2)
//. 7
//. ```
const owl = curry((f, g) => g(f(g)))

module.exports = owl
