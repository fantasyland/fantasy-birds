const curry = require('fantasy-helpers').curry


//# dove :: (a -> c -> d) -> a -> (b -> c) -> b -> d
//.
//. D combinator
//.
//. ```js
//. > dove(postfix => str => str + postfix)('!')(x => x.toUpperCase())('birds')
//. 'BIRDS!'
//. ```
const dove = curry((f, x, g, y) => f(x)(g(y)))

module.exports = dove
