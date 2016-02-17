//# vireostar :: (b -> a -> b -> d) -> a -> b -> b -> d
//.
const vireostar = f => x => y => z => f(y)(x)(z)

module.exports = vireostar
