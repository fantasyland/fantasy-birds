//# eaglebald :: (e -> f -> g) -> (a -> b -> e) -> a -> b -> (c -> d -> f) -> c -> d -> g
//.
const eaglebald = f => g => s => t => h => u => v => f(g(s)(t))(h(u)(v))

module.exports = eaglebald
