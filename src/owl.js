const curry = require('fantasy-helpers').curry


//# owl :: ((a -> b) -> a) -> (a -> b) -> b
//.
const owl = curry((f,  g) => g(f(g)))

module.exports = owl
