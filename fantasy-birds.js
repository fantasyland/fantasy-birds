//# idiot :: a -> a
//.
//. identity
//.
//. ```js
//. > idiot('bird')
//. 'bird'
//. ```
const idiot = x => x

//# kestrel :: a -> b -> a
//.
//. K combinator or `const`
//.
//. ```js
//. > kestrel('bird')('cat')
//. 'bird'
//. ```
const kestrel = x => y => x

//# bluebird :: (b -> c) -> (a -> b) -> a -> c
//.
//. B combinator or function composition
//.
//. ```js
//. > bluebird(x => x * 2)(x => x - 1)(3)
//. 4
//. ```
const bluebird = f => g => x => f(g(x))

//# cardinal :: (a -> b -> c) -> b -> a -> c
//.
//. C combinator or flip
//.
//. ```js
//. > cardinal(str => prefix => prefix + str)('-')('birds')
//. '-birds'
//. ```
const cardinal = f => y => x => f(x)(y)

//# applicator :: (a -> b) -> a -> b
//.
//. A combinator or apply
//.
//. ```js
//. > applicator(x => x + 1)(3)
//. 4
//. ```
const applicator = f => x => f(x)

//# psi :: (b -> b -> c) -> (a -> b) -> a -> a -> c
//.
//. PSI combinator or on
//.
//. ```js
//. > psi(x => y => x + y)(x => x * -1)(3)(5)
//. -8
//. ```
const psi = f => g => x => y => f(g(x))(g(y))

//# becard :: (c -> d) -> (b -> c) -> (a -> b) -> a -> d
//.
//. B3 combinator or function composition (for three functions)
//.
//. ```js
//. > becard(x => x * -1)(x => x * 2)(x => x - 1)(3)
//. -4
//. ```
const becard = f => g => h => x => f(g(h(x)))

//# blackbird :: (c -> d) -> (a -> b -> c) -> a -> b -> d
//.
//. B1 combinator
//.
//. ```js
//. > blackbird(x => x * -1)(x => y => x + y)(3)(5)
//. -8
//. ```
const blackbird = f => g => x => y => f(g(x)(y))

//# bluebird_ :: (a -> c -> d) -> a -> (b -> c) -> b -> d
//.
//. B' combinator
//.
//. ```js
//. > bluebird_(x => y => x * y)(2)(x => x + 1)(2)
//. 6
//. ```
const bluebird_ = f => x => g => y => f(x)(g(y))

//# bunting :: (d -> e) -> (a -> b -> c -> d) -> a -> b -> c -> e
const bunting = f => g => x => y => z => f(g(x)(y)(z))

//# cardinal_ :: (c -> a -> d) -> (b -> c) -> a -> b -> d
const cardinal_ = f => g => x => y => f(g(y))(x)

//# cardinalstar :: (a -> c -> b -> d) -> a -> b -> c -> d
const cardinalstar = f => x => y => z => f(x)(z)(y)

//# cardinalstarstar :: (a -> b -> d -> c -> e) -> a -> b -> c -> d -> e
const cardinalstarstar = f => s => t => u => v => f(s)(t)(v)(u)

//# dove :: (a -> c -> d) -> a -> (b -> c) -> b -> d
const dove = f => x => g => y => f(x)(g(y))

//# dickcissel :: (a -> b -> d -> e) -> a -> b -> (c -> d) -> c -> e
const dickcissel = f => x => y => g => z => f(x)(y)(g(z))

//# dovekie :: (c -> d -> e) -> (a -> c) -> a -> (b -> d) -> b -> e
const dovekie = f => g => x => h => y => f(g(x))(h(y))

//# eagle :: (a -> d -> e) -> a -> (b -> c -> d) -> b -> c -> e
const eagle = f => x => g => y => z => f(x)(g(y)(z))

//# eaglebald :: (e -> f -> g) -> (a -> b -> e) -> a -> b -> (c -> d -> f) -> c -> d -> g
const eaglebald = f => g => s => t => h => u => v => f(g(s)(t))(h(u)(v))

//# finch :: a -> b -> (b -> a -> c) -> c
const finch = x => y => f => f(y)(x)

//# finchstar :: (c -> b -> a -> d) -> a -> b -> c -> d
const finchstar = f => x => y => z => f(z)(y)(x)

//# finchstarstar :: (a -> d -> c -> b -> e) -> a -> b -> c -> d -> e
const finchstarstar = f => s => t => u => v => f(s)(v)(u)(t)

//# goldfinch :: (b -> c -> d) -> (a -> c) -> a -> b -> d
const goldfinch = f => g => x => y => f(y)(g(x))

//# hummingbird :: (a -> b -> a -> c) -> a -> b -> c
const hummingbird = f => x => y => f(x)(y)(x)

//# idstar :: (a -> b) -> a -> b
const idstar = f => x => f(x)

//# idstarstar :: (a -> b -> c) -> a -> b -> c
const idstarstar = f => x => y => f(x)(y)

//# jalt :: (a -> c) -> a -> b -> c
const jalt = f => x => y => f(x)

//# jalt_ :: (a -> b -> d) -> a -> b -> c -> d
const jalt_ = f => x => y => z => f(x)(y)

//# jay :: (a -> b -> b) -> a -> b -> a -> b
const jay = f => x => y => z => f(x)(f(z)(y))

//# kite :: a -> b -> b
const kite = x => y => y

//# owl :: ((a -> b) -> a) -> (a -> b) -> b
const owl = f => g => g(f(g))

//# phoenix :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
const phoenix = f => g => h => x => f(g(x))(h(x))

//# quacky :: a -> (a -> b) -> (b -> c) -> c
const quacky = x => f => g => g(f(x))

//# queer :: (a -> b) -> (b -> c) -> a -> c
const queer = f => g => x => g(f(x))

//# quirky :: (a -> b) -> a -> (b -> c) -> c
const quirky = f => x => g => g(f(x))

//# quixotic :: (b -> c) -> a -> (a -> b) -> c
const quixotic = f => x => g => f(g(x))

//# quizzical :: a -> (b -> c) -> (a -> b) -> c
const quizzical = x => f => g => f(g(x))

//# robin :: a -> (b -> a -> c) -> b -> c
const robin = x => f => y => f(y)(x)

//# robinstar :: (b -> c -> a -> d) -> a -> b -> c -> d
const robinstar = f => x => y => z => f(y)(z)(x)

//# robinstarstar :: (a -> c -> d -> b -> e) -> a -> b -> c -> d -> e
const robinstarstar = f => s => t => u => v => f(s)(u)(v)(t)

//# starling :: (a -> b -> c) -> (a -> b) -> a -> c
const starling = f => g => x => f(x)(g(x))

//# starling_ :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d
const starling_ = f => g => h => x => f(g(x))(h(x))

//# thrush :: a -> (a -> b) -> b
const thrush = x => f => f(x)

//# vireo :: a -> b -> (a -> b -> c) -> c
const vireo = x => y => f => f(x)(y)

//# vireostar :: (b -> a -> b -> d) -> a -> b -> b -> d
const vireostar = f => x => y => z => f(y)(x)(z)

//# vireostarstar :: (a -> c -> b -> c -> e) -> a -> b -> c -> c -> e
const vireostarstar = f => s => t => u => v => f(s)(v)(t)(u)

//# warbler :: (a -> a -> b) -> a -> b
const warbler = f => x => f(x)(x)

//# warbler1 :: a -> (a -> a -> b) -> b
const warbler1 = x => f => f(x)(x)

//# warblerstar :: (a -> b -> b -> c) -> a -> b -> c
const warblerstar = f => x => y => f(x)(y)(y)

//# warblerstarstar :: (a -> b -> c -> c -> d) -> a -> b -> c -> d
const warblerstarstar = f => x => y => z => f(x)(y)(z)(z)


module.exports = { idiot: idiot
                 , kestrel: kestrel
                 , bluebird: bluebird
                 , cardinal: cardinal
                 , applicator: applicator
                 , psi: psi
                 , becard: becard
                 , blackbird: blackbird
                 , bluebird_: bluebird_
                 , bunting: bunting
                 , cardinal_: cardinal_
                 , cardinalstar: cardinalstar
                 , cardinalstarstar: cardinalstarstar
                 , dove: dove
                 , dickcissel: dickcissel
                 , dovekie: dovekie
                 , eagle: eagle
                 , eaglebald: eaglebald
                 , finch: finch
                 , finchstar: finchstar
                 , finchstarstar: finchstarstar
                 , goldfinch: goldfinch
                 , hummingbird: hummingbird
                 , idstar: idstar
                 , idstarstar: idstarstar
                 , jalt: jalt
                 , jalt_: jalt_
                 , jay: jay
                 , kite: kite
                 , owl: owl
                 , phoenix: phoenix
                 , quacky: quacky
                 , queer: queer
                 , quirky: quirky
                 , quixotic: quixotic
                 , quizzical: quizzical
                 , robin: robin
                 , robinstar: robinstar
                 , robinstarstar: robinstarstar
                 , starling: starling
                 , starling_: starling_
                 , thrush: thrush
                 , vireo: vireo
                 , vireostar: vireostar
                 , vireostarstar: vireostarstar
                 , warbler: warbler
                 , warbler1: warbler1
                 , warblerstar: warblerstar
                 , warblerstarstar: warblerstarstar
                 };
