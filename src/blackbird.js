//# blackbird :: (c -> d) -> (a -> b -> c) -> a -> b -> d
//.
//. B1 combinator
//.
//. ```js
//. > blackbird(x => x * -1)(x => y => x + y)(3)(5)
//. -8
//. ```
const blackbird = f => g => x => y => f(g(x)(y))

module.exports = blackbird
