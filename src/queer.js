//# queer :: (a -> b) -> (b -> c) -> a -> c
//.
const queer = f => g => x => g(f(x))

module.exports = queer
