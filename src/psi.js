const combinators = require('fantasy-combinators');
const curry = require('fantasy-helpers').curry


//# psi :: (b -> b -> c) -> (a -> b) -> a -> a -> c
//.
//. PSI combinator or on
//.
//. ```js
//. > psi(x => y => x + y)(x => x * -1)(3)(5)
//. -8
//. ```
const psi = curry(combinators.psi)

module.exports = psi
