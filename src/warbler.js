//# warbler :: (a -> a -> b) -> a -> b
//.
const warbler = f => x => f(x)(x)

module.exports = warbler
