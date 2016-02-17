//# idstarstar :: (a -> b -> c) -> a -> b -> c
//.
const idstarstar = f => x => y => f(x)(y)

module.exports = idstarstar
