//# quixotic :: (b -> c) -> a -> (a -> b) -> c
//.
const quixotic = f => x => g => f(g(x))

module.exports = quixotic
