//# dovekie :: (c -> d -> e) -> (a -> c) -> a -> (b -> d) -> b -> e
//.
const dovekie = f => g => x => h => y => f(g(x))(h(y))

module.exports = dovekie
