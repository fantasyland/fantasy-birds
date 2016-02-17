//# warblerstar :: (a -> b -> b -> c) -> a -> b -> c
//.
const warblerstar = f => x => y => f(x)(y)(y)

module.exports = warblerstar
