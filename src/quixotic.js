const curry = require('fantasy-helpers').curry


//# quixotic :: (b -> c) -> a -> (a -> b) -> c
//.
const quixotic = curry((f,  x,  g) => f(g(x)))

module.exports = quixotic
