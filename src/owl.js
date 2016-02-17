//# owl :: ((a -> b) -> a) -> (a -> b) -> b
//.
const owl = f => g => g(f(g))

module.exports = owl
