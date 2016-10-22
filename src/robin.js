const curry = require('fantasy-helpers').curry


//# robin :: a -> (b -> a -> c) -> b -> c
//.
//. R combinator - robin.
//.
//. ```js
//. > robin("fantasy")(b => a => a + "-" + b)("birds")
//. 'fantasy-birds'
//. ```
const robin = curry((x, f, y) => f(y)(x))

module.exports = robin
