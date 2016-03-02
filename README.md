Fantasy Birds
=============

![](https://raw.github.com/puffnfresh/fantasy-land/master/logo.png)

## General

> This is a port of the haskell package [Data.Aviary.Birds][haskell-docs].
Every thing for your combinatory needs.

Check out the [docs](#ornithology) to see all available birds.

[![Build Status](https://travis-ci.org/fantasyland/fantasy-birds.svg)](https://travis-ci.org/fantasyland/fantasy-birds)
[![npm version](https://badge.fury.io/js/fantasy-birds.svg)](http://badge.fury.io/js/fantasy-birds)
[![dependecies](https://david-dm.org/fantasyland/fantasy-birds.svg)](https://david-dm.org/fantasyland/fantasy-birds.svg)

[docs]: ./DOCS.md
[haskell-docs]: https://hackage.haskell.org/package/data-aviary-0.4.0/docs/Data-Aviary-Birds.html
[haskell-source]: https://hackage.haskell.org/package/data-aviary-0.4.0/docs/src/Data-Aviary-Birds.html


## Ornithology


<h3 name="applicator"><code><a href="./src/applicator.js#L5">applicator :: (a -> b) -> a -> b</a></code></h3>

A combinator or apply

```js
> applicator(x => x + 1)(3)
4
```

<h3 name="becard"><code><a href="./src/becard.js#L4">becard :: (c -> d) -> (b -> c) -> (a -> b) -> a -> d</a></code></h3>

B3 combinator or function composition (for three functions)

```js
> becard(x => x * -1)(x => x * 2)(x => x - 1)(3)
-4
```

<h3 name="blackbird"><code><a href="./src/blackbird.js#L4">blackbird :: (c -> d) -> (a -> b -> c) -> a -> b -> d</a></code></h3>

B1 combinator

```js
> blackbird(x => x * -1)(x => y => x + y)(3)(5)
-8
```

<h3 name="bluebird"><code><a href="./src/bluebird.js#L5">bluebird :: (b -> c) -> (a -> b) -> a -> c</a></code></h3>

B combinator or function composition

```js
> bluebird(x => x * 2)(x => x - 1)(3)
4
```

<h3 name="bluebird_"><code><a href="./src/bluebird_.js#L4">bluebird_ :: (a -> c -> d) -> a -> (b -> c) -> b -> d</a></code></h3>

B' combinator

```js
> bluebird_(x => y => x * y)(2)(x => x + 1)(2)
6
```

<h3 name="bunting"><code><a href="./src/bunting.js#L4">bunting :: (d -> e) -> (a -> b -> c -> d) -> a -> b -> c -> e</a></code></h3>

B2 combinator

```js
> bunting(x =>  x * -1)(x => y => z => x + y + z)(1)(2)(3)
-6
```

<h3 name="cardinal"><code><a href="./src/cardinal.js#L5">cardinal :: (a -> b -> c) -> b -> a -> c</a></code></h3>

C combinator or flip

```js
> cardinal(str => prefix => prefix + str)('-')('birds')
'-birds'
```

<h3 name="cardinal_"><code><a href="./src/cardinal_.js#L4">cardinal_ :: (c -> a -> d) -> (b -> c) -> a -> b -> d</a></code></h3>

C' combinator

```js
> cardinal_(x => y => x * y)(x => x + 1)(2)(3)
8
```

<h3 name="cardinalstar"><code><a href="./src/cardinalstar.js#L4">cardinalstar :: (a -> c -> b -> d) -> a -> b -> c -> d</a></code></h3>

C* combinator - cardinal once removed.

```js
> cardinalstar(str => prefix => postfix => prefix + str + postfix)('birds')('!')('-')
'-birds!'
```

<h3 name="cardinalstarstar"><code><a href="./src/cardinalstarstar.js#L4">cardinalstarstar :: (a -> b -> d -> c -> e) -> a -> b -> c -> d -> e</a></code></h3>

C** combinator - cardinal twice removed.

```js
> cardinalstarstar(a => b => separator => postfix => a + separator + b + postfix)('fantasy')('birds')('!')('-')
'fantasy-birds!'
```

<h3 name="dickcissel"><code><a href="./src/dickcissel.js#L4">dickcissel :: (a -> b -> d -> e) -> a -> b -> (c -> d) -> c -> e</a></code></h3>

D1 combinator

```js
> dickcissel(prefix => postfix => str => prefix + str + postfix)('-')('!')(x => x.toUpperCase())('birds')
'-BIRDS!'
```

<h3 name="dove"><code><a href="./src/dove.js#L4">dove :: (a -> c -> d) -> a -> (b -> c) -> b -> d</a></code></h3>

D combinator

```js
> dove(postfix => str => str + postfix)('!')(x => x.toUpperCase())('birds')
'BIRDS!'
```

<h3 name="dovekie"><code><a href="./src/dovekie.js#L4">dovekie :: (c -> d -> e) -> (a -> c) -> a -> (b -> d) -> b -> e</a></code></h3>

D2 combinator

```js
> dovekie(prefix => str => prefix + str)(x => x.toUpperCase())('fantasy-')(x => x.toLowerCase())('BIRDS')
'FANTASY-birds'
```

<h3 name="eagle"><code><a href="./src/eagle.js#L4">eagle :: (a -> d -> e) -> a -> (b -> c -> d) -> b -> c -> e</a></code></h3>

E combinator

```js
> eagle(prefix => str => prefix + str)('-')(str => postfix => str + postfix)('birds')('!')
'-birds!'
```

<h3 name="eaglebald"><code><a href="./src/eaglebald.js#L4">eaglebald :: (e -> f -> g) -> (a -> b -> e) -> a -> b -> (c -> d -> f) -> c -> d -> g</a></code></h3>

E^ combinator

```js
> eaglebald(x => y => y + x)(a => b => b + a)('!')('birds')(a => b => a + b)('fantasy')('-')
'fantasy-birds!'
```

<h3 name="finch"><code><a href="./src/finch.js#L4">finch :: a -> b -> (b -> a -> c) -> c</a></code></h3>

F combinator

```js
> finch(-1, 3)(x => y => x * y)
-3
```

<h3 name="finchstar"><code><a href="./src/finchstar.js#L4">finchstar :: (c -> b -> a -> d) -> a -> b -> c -> d</a></code></h3>

<h3 name="finchstarstar"><code><a href="./src/finchstarstar.js#L4">finchstarstar :: (a -> d -> c -> b -> e) -> a -> b -> c -> d -> e</a></code></h3>

<h3 name="goldfinch"><code><a href="./src/goldfinch.js#L4">goldfinch :: (b -> c -> d) -> (a -> c) -> a -> b -> d</a></code></h3>

<h3 name="hummingbird"><code><a href="./src/hummingbird.js#L4">hummingbird :: (a -> b -> a -> c) -> a -> b -> c</a></code></h3>

<h3 name="idiot"><code><a href="./src/idiot.js#L5">idiot :: a -> a</a></code></h3>

identity

```js
> idiot('bird')
'bird'
```

<h3 name="idstar"><code><a href="./src/idstar.js#L4">idstar :: (a -> b) -> a -> b</a></code></h3>

<h3 name="idstarstar"><code><a href="./src/idstarstar.js#L4">idstarstar :: (a -> b -> c) -> a -> b -> c</a></code></h3>

<h3 name="jalt"><code><a href="./src/jalt.js#L4">jalt :: (a -> c) -> a -> b -> c</a></code></h3>

<h3 name="jalt_"><code><a href="./src/jalt_.js#L4">jalt_ :: (a -> b -> d) -> a -> b -> c -> d</a></code></h3>

<h3 name="jay"><code><a href="./src/jay.js#L4">jay :: (a -> b -> b) -> a -> b -> a -> b</a></code></h3>

<h3 name="kestrel"><code><a href="./src/kestrel.js#L5">kestrel :: a -> b -> a</a></code></h3>

K combinator or `const`

```js
> kestrel('bird')('cat')
'bird'
```

<h3 name="kite"><code><a href="./src/kite.js#L4">kite :: a -> b -> b</a></code></h3>

<h3 name="owl"><code><a href="./src/owl.js#L4">owl :: ((a -> b) -> a) -> (a -> b) -> b</a></code></h3>

<h3 name="phoenix"><code><a href="./src/phoenix.js#L4">phoenix :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d</a></code></h3>

<h3 name="psi"><code><a href="./src/psi.js#L5">psi :: (b -> b -> c) -> (a -> b) -> a -> a -> c</a></code></h3>

PSI combinator or on

```js
> psi(x => y => x + y)(x => x * -1)(3)(5)
-8
```

<h3 name="quacky"><code><a href="./src/quacky.js#L4">quacky :: a -> (a -> b) -> (b -> c) -> c</a></code></h3>

<h3 name="queer"><code><a href="./src/queer.js#L4">queer :: (a -> b) -> (b -> c) -> a -> c</a></code></h3>

<h3 name="quirky"><code><a href="./src/quirky.js#L4">quirky :: (a -> b) -> a -> (b -> c) -> c</a></code></h3>

<h3 name="quixotic"><code><a href="./src/quixotic.js#L4">quixotic :: (b -> c) -> a -> (a -> b) -> c</a></code></h3>

<h3 name="quizzical"><code><a href="./src/quizzical.js#L4">quizzical :: a -> (b -> c) -> (a -> b) -> c</a></code></h3>

<h3 name="robin"><code><a href="./src/robin.js#L4">robin :: a -> (b -> a -> c) -> b -> c</a></code></h3>

<h3 name="robinstar"><code><a href="./src/robinstar.js#L4">robinstar :: (b -> c -> a -> d) -> a -> b -> c -> d</a></code></h3>

<h3 name="robinstarstar"><code><a href="./src/robinstarstar.js#L4">robinstarstar :: (a -> c -> d -> b -> e) -> a -> b -> c -> d -> e</a></code></h3>

<h3 name="starling"><code><a href="./src/starling.js#L5">starling :: (a -> b -> c) -> (a -> b) -> a -> c</a></code></h3>

<h3 name="starling_"><code><a href="./src/starling_.js#L4">starling_ :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d</a></code></h3>

<h3 name="thrush"><code><a href="./src/thrush.js#L5">thrush :: a -> (a -> b) -> b</a></code></h3>

<h3 name="vireo"><code><a href="./src/vireo.js#L4">vireo :: a -> b -> (a -> b -> c) -> c</a></code></h3>

<h3 name="vireostar"><code><a href="./src/vireostar.js#L4">vireostar :: (b -> a -> b -> d) -> a -> b -> b -> d</a></code></h3>

<h3 name="vireostarstar"><code><a href="./src/vireostarstar.js#L4">vireostarstar :: (a -> c -> b -> c -> e) -> a -> b -> c -> c -> e</a></code></h3>

<h3 name="warbler"><code><a href="./src/warbler.js#L4">warbler :: (a -> a -> b) -> a -> b</a></code></h3>

<h3 name="warbler1"><code><a href="./src/warbler1.js#L4">warbler1 :: a -> (a -> a -> b) -> b</a></code></h3>

<h3 name="warblerstar"><code><a href="./src/warblerstar.js#L4">warblerstar :: (a -> b -> b -> c) -> a -> b -> c</a></code></h3>

<h3 name="warblerstarstar"><code><a href="./src/warblerstarstar.js#L4">warblerstarstar :: (a -> b -> c -> c -> d) -> a -> b -> c -> d</a></code></h3>
