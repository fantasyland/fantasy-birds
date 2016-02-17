//# hummingbird :: (a -> b -> a -> c) -> a -> b -> c
//.
const hummingbird = f => x => y => f(x)(y)(x)

module.exports = hummingbird
