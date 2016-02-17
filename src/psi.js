const combinators = require('fantasy-combinators');


//# psi :: (b -> b -> c) -> (a -> b) -> a -> a -> c
//.
//. PSI combinator or on
//.
//. ```js
//. > psi(x => y => x + y)(x => x * -1)(3)(5)
//. -8
//. ```
const psi = combinators.psi

module.exports = psi
