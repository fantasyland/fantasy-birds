fantasy-birds
=============

> This is a port of the haskell package [Data.Aviary.Birds][haskell-docs].
Every thing for your combinatory needs.

Check out the [docs](#ornithology) to see all available birds.

[![Build Status](https://travis-ci.org/stoeffel/fantasy-birds.svg)](https://travis-ci.org/stoeffel/fantasy-birds)
[![npm version](https://badge.fury.io/js/fantasy-birds.svg)](http://badge.fury.io/js/fantasy-birds)
[![dependecies](https://david-dm.org/stoeffel/fantasy-birds.svg)](https://david-dm.org/stoeffel/fantasy-birds.svg)
[![codecov.io](https://codecov.io/github/stoeffel/fantasy-birds/coverage.svg?branch=master)](https://codecov.io/github/stoeffel/fantasy-birds?branch=master)

[docs]: ./DOCS.md
[haskell-docs]: https://hackage.haskell.org/package/data-aviary-0.4.0/docs/Data-Aviary-Birds.html
[haskell-source]: https://hackage.haskell.org/package/data-aviary-0.4.0/docs/src/Data-Aviary-Birds.html


## Ornithology


<h3 name="idiot"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L1">idiot :: a -> a</a></code></h3>

identity

```js
> idiot('bird')
'bird'
```

<h3 name="kestrel"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L11">kestrel :: a -> b -> a</a></code></h3>

K combinator or `const`

```js
> kestrel('bird')('cat')
'bird'
```

<h3 name="bluebird"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L21">bluebird :: (b -> c) -> (a -> b) -> a -> c</a></code></h3>

B combinator or function composition

```js
> bluebird(x => x * 2)(x => x - 1)(3)
4
```

<h3 name="cardinal"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L31">cardinal :: (a -> b -> c) -> b -> a -> c</a></code></h3>

C combinator or flip

```js
> cardinal(str => prefix => prefix + str)('-')('birds')
'-birds'
```

<h3 name="applicator"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L41">applicator :: (a -> b) -> a -> b</a></code></h3>

A combinator or apply

```js
> applicator(x => x + 1)(3)
4
```

<h3 name="psi"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L51">psi :: (b -> b -> c) -> (a -> b) -> a -> a -> c</a></code></h3>

PSI combinator or on

```js
> psi(x => y => x + y)(x => x * -1)(3)(5)
-8
```

<h3 name="becard"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L61">becard :: (c -> d) -> (b -> c) -> (a -> b) -> a -> d</a></code></h3>

B3 combinator or function composition (for three functions)

```js
> becard(x => x * -1)(x => x * 2)(x => x - 1)(3)
-4
```

<h3 name="blackbird"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L71">blackbird :: (c -> d) -> (a -> b -> c) -> a -> b -> d</a></code></h3>

B1 combinator

```js
> blackbird(x => x * -1)(x => y => x + y)(3)(5)
-8
```

<h3 name="bluebird_"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L81">bluebird_ :: (a -> c -> d) -> a -> (b -> c) -> b -> d</a></code></h3>

B' combinator

```js
> bluebird_(x => y => x * y)(2)(x => x + 1)(2)
6
```

<h3 name="bunting"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L91">bunting :: (d -> e) -> (a -> b -> c -> d) -> a -> b -> c -> e</a></code></h3>

B2 combinator

```js
> bunting(x =>  x * -1)(x => y => z => x + y + z)(1)(2)(3)
-6
```

<h3 name="cardinal_"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L101">cardinal_ :: (c -> a -> d) -> (b -> c) -> a -> b -> d</a></code></h3>

C' combinator

```js
> cardinal_(x => y => x * y)(x => x + 1)(2)(3)
8
```

<h3 name="cardinalstar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L111">cardinalstar :: (a -> c -> b -> d) -> a -> b -> c -> d</a></code></h3>

<h3 name="cardinalstarstar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L114">cardinalstarstar :: (a -> b -> d -> c -> e) -> a -> b -> c -> d -> e</a></code></h3>

<h3 name="dove"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L117">dove :: (a -> c -> d) -> a -> (b -> c) -> b -> d</a></code></h3>

<h3 name="dickcissel"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L120">dickcissel :: (a -> b -> d -> e) -> a -> b -> (c -> d) -> c -> e</a></code></h3>

<h3 name="dovekie"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L123">dovekie :: (c -> d -> e) -> (a -> c) -> a -> (b -> d) -> b -> e</a></code></h3>

<h3 name="eagle"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L126">eagle :: (a -> d -> e) -> a -> (b -> c -> d) -> b -> c -> e</a></code></h3>

<h3 name="eaglebald"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L129">eaglebald :: (e -> f -> g) -> (a -> b -> e) -> a -> b -> (c -> d -> f) -> c -> d -> g</a></code></h3>

<h3 name="finch"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L132">finch :: a -> b -> (b -> a -> c) -> c</a></code></h3>

<h3 name="finchstar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L135">finchstar :: (c -> b -> a -> d) -> a -> b -> c -> d</a></code></h3>

<h3 name="finchstarstar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L138">finchstarstar :: (a -> d -> c -> b -> e) -> a -> b -> c -> d -> e</a></code></h3>

<h3 name="goldfinch"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L141">goldfinch :: (b -> c -> d) -> (a -> c) -> a -> b -> d</a></code></h3>

<h3 name="hummingbird"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L144">hummingbird :: (a -> b -> a -> c) -> a -> b -> c</a></code></h3>

<h3 name="idstar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L147">idstar :: (a -> b) -> a -> b</a></code></h3>

<h3 name="idstarstar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L150">idstarstar :: (a -> b -> c) -> a -> b -> c</a></code></h3>

<h3 name="jalt"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L153">jalt :: (a -> c) -> a -> b -> c</a></code></h3>

<h3 name="jalt_"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L156">jalt_ :: (a -> b -> d) -> a -> b -> c -> d</a></code></h3>

<h3 name="jay"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L159">jay :: (a -> b -> b) -> a -> b -> a -> b</a></code></h3>

<h3 name="kite"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L162">kite :: a -> b -> b</a></code></h3>

<h3 name="owl"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L165">owl :: ((a -> b) -> a) -> (a -> b) -> b</a></code></h3>

<h3 name="phoenix"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L168">phoenix :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d</a></code></h3>

<h3 name="quacky"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L171">quacky :: a -> (a -> b) -> (b -> c) -> c</a></code></h3>

<h3 name="queer"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L174">queer :: (a -> b) -> (b -> c) -> a -> c</a></code></h3>

<h3 name="quirky"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L177">quirky :: (a -> b) -> a -> (b -> c) -> c</a></code></h3>

<h3 name="quixotic"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L180">quixotic :: (b -> c) -> a -> (a -> b) -> c</a></code></h3>

<h3 name="quizzical"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L183">quizzical :: a -> (b -> c) -> (a -> b) -> c</a></code></h3>

<h3 name="robin"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L186">robin :: a -> (b -> a -> c) -> b -> c</a></code></h3>

<h3 name="robinstar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L189">robinstar :: (b -> c -> a -> d) -> a -> b -> c -> d</a></code></h3>

<h3 name="robinstarstar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L192">robinstarstar :: (a -> c -> d -> b -> e) -> a -> b -> c -> d -> e</a></code></h3>

<h3 name="starling"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L195">starling :: (a -> b -> c) -> (a -> b) -> a -> c</a></code></h3>

<h3 name="starling_"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L198">starling_ :: (b -> c -> d) -> (a -> b) -> (a -> c) -> a -> d</a></code></h3>

<h3 name="thrush"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L201">thrush :: a -> (a -> b) -> b</a></code></h3>

<h3 name="vireo"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L204">vireo :: a -> b -> (a -> b -> c) -> c</a></code></h3>

<h3 name="vireostar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L207">vireostar :: (b -> a -> b -> d) -> a -> b -> b -> d</a></code></h3>

<h3 name="vireostarstar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L210">vireostarstar :: (a -> c -> b -> c -> e) -> a -> b -> c -> c -> e</a></code></h3>

<h3 name="warbler"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L213">warbler :: (a -> a -> b) -> a -> b</a></code></h3>

<h3 name="warbler1"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L216">warbler1 :: a -> (a -> a -> b) -> b</a></code></h3>

<h3 name="warblerstar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L219">warblerstar :: (a -> b -> b -> c) -> a -> b -> c</a></code></h3>

<h3 name="warblerstarstar"><code><a href="https://github.com/stoeffel/fantasy-birds/blob/master/fantasy-birds.js#L222">warblerstarstar :: (a -> b -> c -> c -> d) -> a -> b -> c -> d</a></code></h3>
