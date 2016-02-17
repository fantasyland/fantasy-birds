//# robin :: a -> (b -> a -> c) -> b -> c
//.
const robin = x => f => y => f(y)(x)

module.exports = robin
