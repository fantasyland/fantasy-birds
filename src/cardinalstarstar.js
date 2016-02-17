//# cardinalstarstar :: (a -> b -> d -> c -> e) -> a -> b -> c -> d -> e
//.
const cardinalstarstar = f => s => t => u => v => f(s)(t)(v)(u)

module.exports = cardinalstarstar
