const combinators = require('fantasy-combinators');


//# kestrel :: a -> b -> a
//.
//. K combinator or `const`
//.
//. ```js
//. > kestrel('bird')('cat')
//. 'bird'
//. ```
const kestrel = combinators.constant

module.exports = kestrel
