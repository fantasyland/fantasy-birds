//# bunting :: (d -> e) -> (a -> b -> c -> d) -> a -> b -> c -> e
//.
//. B2 combinator
//.
//. ```js
//. > bunting(x =>  x * -1)(x => y => z => x + y + z)(1)(2)(3)
//. -6
//. ```
const bunting = f => g => x => y => z => f(g(x)(y)(z))

module.exports = bunting
