//# jalt_ :: (a -> b -> d) -> a -> b -> c -> d
//.
const jalt_ = f => x => y => z => f(x)(y)

module.exports = jalt_
