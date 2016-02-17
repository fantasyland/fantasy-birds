const combinators = require('fantasy-combinators');


//# applicator :: (a -> b) -> a -> b
//.
//. A combinator or apply
//.
//. ```js
//. > applicator(x => x + 1)(3)
//. 4
//. ```
const applicator = combinators.apply

module.exports = applicator
