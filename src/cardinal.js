const combinators = require('fantasy-combinators');
const curry = require('fantasy-helpers').curry


//# cardinal :: (a -> b -> c) -> b -> a -> c
//.
//. C combinator or flip
//.
//. ```js
//. > cardinal(str => prefix => prefix + str)('-')('birds')
//. '-birds'
//. ```
const cardinal = curry(combinators.flip)

module.exports = cardinal
