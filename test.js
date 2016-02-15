const jsc = require('jsverify');
const birds = require('./');
const R = require('ramda');

const assertForAll = R.compose( jsc.assert
                              , jsc.forall
    );

describe('fantasy-birds', () => {
  it('#idot', () =>
    assertForAll( "nat"
                , b => b === birds.idiot(b))
  );

  it('#kestrel', () =>
    assertForAll( "nat"
                , "nat"
                , (a, b) => a === birds.kestrel(a)(b))
  );

  it('#bluebird', () =>
    assertForAll( "nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, a) => f(g(a)) === birds.bluebird(f)(g)(a))
  );

  it('#cardinal', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, a, b) => f(a)(b) === birds.cardinal(f)(b)(a))
  );

  it('#applicator', () =>
    assertForAll( "nat -> nat"
                , "nat"
                , (f, a) => f(a) === birds.applicator(f)(a))
  );

  it('#psi', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat"
                , "nat"
                , (f, g, a, b) => f(g(a))(g(b)) === birds.psi(f)(g)(a)(b))
  );

  it('#becard', () =>
    assertForAll( "nat -> nat"
                , "nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, h, a) => f(g(h(a))) === birds.becard(f)(g)(h)(a))
  );

  it('#blackbird', () =>
    assertForAll( "nat -> nat"
                , "nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, g, a, b) => f(g(a)(b)) === birds.blackbird(f)(g)(a)(b))
  );

  it('#bluebird_', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat"
                , "nat -> nat"
                , "nat"
                , (f, a, g, b) => f(a)(g(b)) === birds.bluebird_(f)(a)(g)(b))
  );

  it('#bunting', () =>
    assertForAll( "nat -> nat"
                , "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, g, a, b, c) => f(g(a)(b)(c)) === birds.bunting(f)(g)(a)(b)(c))
  );

  it('#cardinal_', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat"
                , "nat"
                , (f, g, a, b) => f(g(b))(a) === birds.cardinal_(f)(g)(a)(b))
  );

  it('#cardinalstar', () =>
    assertForAll( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(a)(c)(b) === birds.cardinalstar(f)(a)(b)(c))
  );

  it('#cardinalstarstar', () =>
    assertForAll( "nat -> nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c, d) => f(a)(b)(d)(c) === birds.cardinalstarstar(f)(a)(b)(c)(d))
  );

  it('#dove', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat"
                , "nat -> nat"
                , "nat"
                , (f, a, g, b) => f(a)(g(b)) === birds.dove(f)(a)(g)(b))
  );

  it('#dickcissel', () =>
    assertForAll( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat -> nat"
                , "nat"
                , (f, a, b, g, c) => f(a)(b)(g(c)) === birds.dickcissel(f)(a)(b)(g)(c))
  );

  it('#dovekie', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat"
                , "nat -> nat"
                , "nat"
                , (f, g, a, h, b) => f(g(a))(h(b)) === birds.dovekie(f)(g)(a)(h)(b))
  );

  it('#eagle', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat"
                , "nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, a, g, b, c) => f(a)(g(b)(c)) === birds.eagle(f)(a)(g)(b)(c))
  );

  it('#eaglebald', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat -> nat -> nat"
                , "nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, g, a, b, h, c, d) => f(g(a)(b))(h(c)(d)) === birds.eaglebald(f)(g)(a)(b)(h)(c)(d))
  );

  it('#finch', () =>
    assertForAll( "nat"
                , "nat"
                , "nat -> nat -> nat"
                , (a, b ,f) => f(b)(a) === birds.finch(a)(b)(f))
  );

  it('#finchstar', () =>
    assertForAll( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(c)(b)(a) === birds.finchstar(f)(a)(b)(c))
  );

  it('#finchstarstar', () =>
    assertForAll( "nat -> nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c, d) => f(a)(d)(c)(b) === birds.finchstarstar(f)(a)(b)(c)(d))
  );

  it('#goldfinch', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat"
                , "nat"
                , (f, g, a, b) => f(b)(g(a))=== birds.goldfinch(f)(g)(a)(b))
  );

  it('#hummingbird', () =>
    assertForAll( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, a, b) => f(a)(b)(a) === birds.hummingbird(f)(a)(b))
  );

  it('#idstar', () =>
    assertForAll( "nat -> nat"
                , "nat"
                , (f, a) => f(a) === birds.idstar(f)(a))
  );

  it('#idstarstar', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, a, b) => f(a)(b) === birds.idstarstar(f)(a)(b))
  );

  it('#jalt', () =>
    assertForAll( "nat -> nat"
                , "nat"
                , "nat"
                , (f, a, b) => f(a) === birds.jalt(f)(a)(b))
  );

  it('#jalt_', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(a)(b) === birds.jalt_(f)(a)(b)(c))
  );

  it('#jay', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(a)(f(c)(b)) === birds.jay(f)(a)(b)(c))
  );

  it('#kite', () =>
    assertForAll( "nat"
                , "nat"
                , (a, b) => b === birds.kite(a)(b))
  );

  it('#owl', () =>
    assertForAll( "(nat -> nat) -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g) => g(f(g)) === birds.owl(f)(g))
  );

  it('#phoenix', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, h, a) => f(g(a))(h(a)) === birds.phoenix(f)(g)(h)(a))
  );

  it('#quacky', () =>
    assertForAll( "nat"
                , "nat -> nat"
                , "nat -> nat"
                , (a, f, g) => g(f(a)) === birds.quacky(a)(f)(g))
  );

  it('#queer', () =>
    assertForAll( "nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, a) => g(f(a)) === birds.queer(f)(g)(a))
  );

  it('#quirky', () =>
    assertForAll( "nat -> nat"
                , "nat"
                , "nat -> nat"
                , (f, a, g) => g(f(a)) === birds.quirky(f)(a)(g))
  );

  it('#quixotic', () =>
    assertForAll( "nat -> nat"
                , "nat"
                , "nat -> nat"
                , (f, a, g) => f(g(a)) === birds.quixotic(f)(a)(g))
  );

  it('#quizzical', () =>
    assertForAll( "nat"
                , "nat -> nat"
                , "nat -> nat"
                , (a, f, g) => f(g(a)) === birds.quizzical(a)(f)(g))
  );

  it('#robin', () =>
    assertForAll( "nat"
                , "nat -> nat -> nat"
                , "nat"
                , (a, f, b) => f(b)(a) === birds.robin(a)(f)(b))
  );

  it('#robinstar', () =>
    assertForAll( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(b)(c)(a) === birds.robinstar(f)(a)(b)(c))
  );

  it('#robinstarstar', () =>
    assertForAll( "nat -> nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c, d) => f(a)(c)(d)(b) === birds.robinstarstar(f)(a)(b)(c)(d))
  );

  it('#starling', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, a) => f(a)(g(a)) === birds.starling(f)(g)(a))
  );

  it('#starling_', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, h, a) => f(g(a))(h(a)) === birds.starling_(f)(g)(h)(a))
  );

  it('#thrush', () =>
    assertForAll( "nat"
                , "nat -> nat"
                , (a, f) => f(a) === birds.thrush(a)(f))
  );

  it('#vireo', () =>
    assertForAll( "nat"
                , "nat"
                , "nat -> nat -> nat"
                , (a, b, f) => f(a)(b) === birds.vireo(a)(b)(f))
  );

  it('#vireostar', () =>
    assertForAll( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(b)(a)(c) === birds.vireostar(f)(a)(b)(c))
  );

  it('#vireostarstar', () =>
    assertForAll( "nat -> nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c, d) => f(a)(d)(b)(c) === birds.vireostarstar(f)(a)(b)(c)(d))
  );

  it('#warbler', () =>
    assertForAll( "nat -> nat -> nat"
                , "nat"
                , (f, a) => f(a)(a) === birds.warbler(f)(a))
  );

  it('#warbler1', () =>
    assertForAll( "nat"
                , "nat -> nat -> nat"
                , (a, f) => f(a)(a) === birds.warbler1(a)(f))
  );

  it('#warblerstar', () =>
    assertForAll( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, a, b) => f(a)(b)(b) === birds.warblerstar(f)(a)(b))
  );

  it('#warblerstarstar', () =>
    assertForAll( "nat -> nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(a)(b)(c)(c) === birds.warblerstarstar(f)(a)(b)(c))
  );
});
