const combinators = require('fantasy-combinators');
const curry = require('fantasy-helpers').curry


//# kestrel :: a -> b -> a
//.
//. K combinator or `const`
//.
//. ```js
//. > kestrel('bird')('cat')
//. 'bird'
//. ```
const kestrel = curry(combinators.constant)

module.exports = kestrel
