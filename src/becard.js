//# becard :: (c -> d) -> (b -> c) -> (a -> b) -> a -> d
//.
//. B3 combinator or function composition (for three functions)
//.
//. ```js
//. > becard(x => x * -1)(x => x * 2)(x => x - 1)(3)
//. -4
//. ```
const becard = f => g => h => x => f(g(h(x)))

module.exports = becard
