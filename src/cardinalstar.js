//# cardinalstar :: (a -> c -> b -> d) -> a -> b -> c -> d
//.
const cardinalstar = f => x => y => z => f(x)(z)(y)

module.exports = cardinalstar
