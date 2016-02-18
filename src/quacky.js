const curry = require('fantasy-helpers').curry


//# quacky :: a -> (a -> b) -> (b -> c) -> c
//.
const quacky = curry((x, f, g) => g(f(x)))

module.exports = quacky
