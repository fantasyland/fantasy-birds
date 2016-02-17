const combinators = require('fantasy-combinators');
const curry = require('fantasy-helpers').curry


//# bluebird :: (b -> c) -> (a -> b) -> a -> c
//.
//. B combinator or function composition
//.
//. ```js
//. > bluebird(x => x * 2)(x => x - 1)(3)
//. 4
//. ```
const bluebird = curry(combinators.compose)

module.exports = bluebird
