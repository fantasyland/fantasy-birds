//# finch :: a -> b -> (b -> a -> c) -> c
//.
const finch = x => y => f => f(y)(x)

module.exports = finch
