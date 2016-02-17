//# quirky :: (a -> b) -> a -> (b -> c) -> c
//.
const quirky = f => x => g => g(f(x))

module.exports = quirky
