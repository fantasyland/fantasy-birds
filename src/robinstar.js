//# robinstar :: (b -> c -> a -> d) -> a -> b -> c -> d
//.
const robinstar = f => x => y => z => f(y)(z)(x)

module.exports = robinstar
