const combinators = require('fantasy-combinators')

//# idiot :: a -> a
//.
//. identity
//.
//. ```js
//. > idiot('bird')
//. 'bird'
//. ```
const idiot = combinators.identity

module.exports = idiot;
