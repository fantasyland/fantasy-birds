//# dove :: (a -> c -> d) -> a -> (b -> c) -> b -> d
//.
const dove = f => x => g => y => f(x)(g(y))

module.exports = dove
