//# quacky :: a -> (a -> b) -> (b -> c) -> c
//.
const quacky = x => f => g => g(f(x))

module.exports = quacky
