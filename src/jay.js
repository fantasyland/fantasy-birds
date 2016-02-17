//# jay :: (a -> b -> b) -> a -> b -> a -> b
//.
const jay = f => x => y => z => f(x)(f(z)(y))

module.exports = jay
