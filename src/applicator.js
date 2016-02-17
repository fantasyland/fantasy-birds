const combinators = require('fantasy-combinators');
const curry = require('fantasy-helpers').curry


//# applicator :: (a -> b) -> a -> b
//.
//. A combinator or apply
//.
//. ```js
//. > applicator(x => x + 1)(3)
//. 4
//. ```
const applicator = curry(combinators.apply)

module.exports = applicator
