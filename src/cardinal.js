const combinators = require('fantasy-combinators');


//# cardinal :: (a -> b -> c) -> b -> a -> c
//.
//. C combinator or flip
//.
//. ```js
//. > cardinal(str => prefix => prefix + str)('-')('birds')
//. '-birds'
//. ```
const cardinal = combinators.flip

module.exports = cardinal
