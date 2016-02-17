//# jalt :: (a -> c) -> a -> b -> c
//.
const jalt = f => x => y => f(x)

module.exports = jalt
