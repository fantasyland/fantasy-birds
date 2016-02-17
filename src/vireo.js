const curry = require('fantasy-helpers').curry


//# vireo :: a -> b -> (a -> b -> c) -> c
//.
const vireo = curry((x,  y,  f) => f(x)(y))

module.exports = vireo
