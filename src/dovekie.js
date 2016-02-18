const curry = require('fantasy-helpers').curry


//# dovekie :: (c -> d -> e) -> (a -> c) -> a -> (b -> d) -> b -> e
//.
const dovekie = curry((f, g, x, h, y) => f(g(x))(h(y)))

module.exports = dovekie
