//# phoenix :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
//.
const phoenix = f => g => h => x => f(g(x))(h(x))

module.exports = phoenix
