//# goldfinch :: (b -> c -> d) -> (a -> c) -> a -> b -> d
//.
const goldfinch = f => g => x => y => f(y)(g(x))

module.exports = goldfinch
