//# vireo :: a -> b -> (a -> b -> c) -> c
//.
const vireo = x => y => f => f(x)(y)

module.exports = vireo
