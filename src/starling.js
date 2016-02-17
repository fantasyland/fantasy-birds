const combinators = require('fantasy-combinators');


//# starling :: (a -> b -> c) -> (a -> b) -> a -> c
//.
const starling = combinators.substitution

module.exports = starling
