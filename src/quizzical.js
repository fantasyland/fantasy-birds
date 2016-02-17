//# quizzical :: a -> (b -> c) -> (a -> b) -> c
//.
const quizzical = x => f => g => f(g(x))

module.exports = quizzical
