const curry = require('fantasy-helpers').curry


//# kite :: a -> b -> b
//.
const kite = curry((x, y) => y)

module.exports = kite
