//# starling_ :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
//.
const starling_ = f => g => h => x => f(g(x))(h(x))

module.exports = starling_
