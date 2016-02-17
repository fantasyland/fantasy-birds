const combinators = require('fantasy-combinators');


//# bluebird :: (b -> c) -> (a -> b) -> a -> c
//.
//. B combinator or function composition
//.
//. ```js
//. > bluebird(x => x * 2)(x => x - 1)(3)
//. 4
//. ```
const bluebird = combinators.compose

module.exports = bluebird
