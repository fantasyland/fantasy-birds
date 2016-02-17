const combinators = require('fantasy-combinators')
const curry = require('fantasy-helpers').curry


//# idiot :: a -> a
//.
//. identity
//.
//. ```js
//. > idiot('bird')
//. 'bird'
//. ```
const idiot = curry(combinators.identity)

module.exports = idiot;
