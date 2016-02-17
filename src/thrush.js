const combinators = require('fantasy-combinators');
const curry = require('fantasy-helpers').curry


//# thrush :: a -> (a -> b) -> b
//.
const thrush = curry(combinators.thrush)

module.exports = thrush
