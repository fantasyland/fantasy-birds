//# warbler1 :: a -> (a -> a -> b) -> b
//.
const warbler1 = x => f => f(x)(x)

module.exports = warbler1
