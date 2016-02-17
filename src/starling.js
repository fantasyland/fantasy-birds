const combinators = require('fantasy-combinators');
const curry = require('fantasy-helpers').curry


//# starling :: (a -> b -> c) -> (a -> b) -> a -> c
//.
const starling = curry(combinators.substitution)

module.exports = starling
