//# dickcissel :: (a -> b -> d -> e) -> a -> b -> (c -> d) -> c -> e
//.
const dickcissel = f => x => y => g => z => f(x)(y)(g(z))

module.exports = dickcissel
