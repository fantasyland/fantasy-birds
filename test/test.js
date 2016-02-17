const jsc = require('jsverify');
const birds = require('../');

describe('fantasy-birds', () => {
  it('#idot', () =>
    jsc.assert(
      jsc.forall( "nat"
                , b => b === birds.idiot(b)))
  );

  it('#kestrel', () =>
    jsc.assert(
      jsc.forall( "nat"
                , "nat"
                , (a, b) => a === birds.kestrel(a)(b)))
  );

  it('#bluebird', () =>
    jsc.assert(
      jsc.forall( "nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, a) => f(g(a)) === birds.bluebird(f)(g)(a)))
  );

  it('#cardinal', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, a, b) => f(a)(b) === birds.cardinal(f)(b)(a)))
  );

  it('#applicator', () =>
    jsc.assert(
      jsc.forall( "nat -> nat"
                , "nat"
                , (f, a) => f(a) === birds.applicator(f)(a)))
  );

  it('#psi', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat"
                , "nat"
                , (f, g, a, b) => f(g(a))(g(b)) === birds.psi(f)(g)(a)(b)))
  );

  it('#becard', () =>
    jsc.assert(
      jsc.forall( "nat -> nat"
                , "nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, h, a) => f(g(h(a))) === birds.becard(f)(g)(h)(a)))
  );

  it('#blackbird', () =>
    jsc.assert(
      jsc.forall( "nat -> nat"
                , "nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, g, a, b) => f(g(a)(b)) === birds.blackbird(f)(g)(a)(b)))
  );

  it('#bluebird_', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat"
                , "nat -> nat"
                , "nat"
                , (f, a, g, b) => f(a)(g(b)) === birds.bluebird_(f)(a)(g)(b)))
  );

  it('#bunting', () =>
    jsc.assert(
      jsc.forall( "nat -> nat"
                , "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, g, a, b, c) => f(g(a)(b)(c)) === birds.bunting(f)(g)(a)(b)(c)))
  );

  it('#cardinal_', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat"
                , "nat"
                , (f, g, a, b) => f(g(b))(a) === birds.cardinal_(f)(g)(a)(b)))
  );

  it('#cardinalstar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(a)(c)(b) === birds.cardinalstar(f)(a)(b)(c)))
  );

  it('#cardinalstarstar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c, d) => f(a)(b)(d)(c) === birds.cardinalstarstar(f)(a)(b)(c)(d)))
  );

  it('#dove', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat"
                , "nat -> nat"
                , "nat"
                , (f, a, g, b) => f(a)(g(b)) === birds.dove(f)(a)(g)(b)))
  );

  it('#dickcissel', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat -> nat"
                , "nat"
                , (f, a, b, g, c) => f(a)(b)(g(c)) === birds.dickcissel(f)(a)(b)(g)(c)))
  );

  it('#dovekie', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat"
                , "nat -> nat"
                , "nat"
                , (f, g, a, h, b) => f(g(a))(h(b)) === birds.dovekie(f)(g)(a)(h)(b)))
  );

  it('#eagle', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat"
                , "nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, a, g, b, c) => f(a)(g(b)(c)) === birds.eagle(f)(a)(g)(b)(c)))
  );

  it('#eaglebald', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat -> nat -> nat"
                , "nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, g, a, b, h, c, d) => f(g(a)(b))(h(c)(d)) === birds.eaglebald(f)(g)(a)(b)(h)(c)(d)))
  );

  it('#finch', () =>
    jsc.assert(
      jsc.forall( "nat"
                , "nat"
                , "nat -> nat -> nat"
                , (a, b ,f) => f(b)(a) === birds.finch(a)(b)(f)))
  );

  it('#finchstar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(c)(b)(a) === birds.finchstar(f)(a)(b)(c)))
  );

  it('#finchstarstar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c, d) => f(a)(d)(c)(b) === birds.finchstarstar(f)(a)(b)(c)(d)))
  );

  it('#goldfinch', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat"
                , "nat"
                , (f, g, a, b) => f(b)(g(a))=== birds.goldfinch(f)(g)(a)(b)))
  );

  it('#hummingbird', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, a, b) => f(a)(b)(a) === birds.hummingbird(f)(a)(b)))
  );

  it('#idstar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat"
                , "nat"
                , (f, a) => f(a) === birds.idstar(f)(a)))
  );

  it('#idstarstar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, a, b) => f(a)(b) === birds.idstarstar(f)(a)(b)))
  );

  it('#jalt', () =>
    jsc.assert(
      jsc.forall( "nat -> nat"
                , "nat"
                , "nat"
                , (f, a, b) => f(a) === birds.jalt(f)(a)(b)))
  );

  it('#jalt_', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(a)(b) === birds.jalt_(f)(a)(b)(c)))
  );

  it('#jay', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(a)(f(c)(b)) === birds.jay(f)(a)(b)(c)))
  );

  it('#kite', () =>
    jsc.assert(
      jsc.forall( "nat"
                , "nat"
                , (a, b) => b === birds.kite(a)(b)))
  );

  it('#owl', () =>
    jsc.assert(
      jsc.forall( "(nat -> nat) -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g) => g(f(g)) === birds.owl(f)(g)))
  );

  it('#phoenix', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, h, a) => f(g(a))(h(a)) === birds.phoenix(f)(g)(h)(a)))
  );

  it('#quacky', () =>
    jsc.assert(
      jsc.forall( "nat"
                , "nat -> nat"
                , "nat -> nat"
                , (a, f, g) => g(f(a)) === birds.quacky(a)(f)(g)))
  );

  it('#queer', () =>
    jsc.assert(
      jsc.forall( "nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, a) => g(f(a)) === birds.queer(f)(g)(a)))
  );

  it('#quirky', () =>
    jsc.assert(
      jsc.forall( "nat -> nat"
                , "nat"
                , "nat -> nat"
                , (f, a, g) => g(f(a)) === birds.quirky(f)(a)(g)))
  );

  it('#quixotic', () =>
    jsc.assert(
      jsc.forall( "nat -> nat"
                , "nat"
                , "nat -> nat"
                , (f, a, g) => f(g(a)) === birds.quixotic(f)(a)(g)))
  );

  it('#quizzical', () =>
    jsc.assert(
      jsc.forall( "nat"
                , "nat -> nat"
                , "nat -> nat"
                , (a, f, g) => f(g(a)) === birds.quizzical(a)(f)(g)))
  );

  it('#robin', () =>
    jsc.assert(
      jsc.forall( "nat"
                , "nat -> nat -> nat"
                , "nat"
                , (a, f, b) => f(b)(a) === birds.robin(a)(f)(b)))
  );

  it('#robinstar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(b)(c)(a) === birds.robinstar(f)(a)(b)(c)))
  );

  it('#robinstarstar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c, d) => f(a)(c)(d)(b) === birds.robinstarstar(f)(a)(b)(c)(d)))
  );

  it('#starling', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, a) => f(a)(g(a)) === birds.starling(f)(g)(a)))
  );

  it('#starling_', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat -> nat"
                , "nat -> nat"
                , "nat"
                , (f, g, h, a) => f(g(a))(h(a)) === birds.starling_(f)(g)(h)(a)))
  );

  it('#thrush', () =>
    jsc.assert(
      jsc.forall( "nat"
                , "nat -> nat"
                , (a, f) => f(a) === birds.thrush(a)(f)))
  );

  it('#vireo', () =>
    jsc.assert(
      jsc.forall( "nat"
                , "nat"
                , "nat -> nat -> nat"
                , (a, b, f) => f(a)(b) === birds.vireo(a)(b)(f)))
  );

  it('#vireostar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(b)(a)(c) === birds.vireostar(f)(a)(b)(c)))
  );

  it('#vireostarstar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c, d) => f(a)(d)(b)(c) === birds.vireostarstar(f)(a)(b)(c)(d)))
  );

  it('#warbler', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat"
                , "nat"
                , (f, a) => f(a)(a) === birds.warbler(f)(a)))
  );

  it('#warbler1', () =>
    jsc.assert(
      jsc.forall( "nat"
                , "nat -> nat -> nat"
                , (a, f) => f(a)(a) === birds.warbler1(a)(f)))
  );

  it('#warblerstar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , (f, a, b) => f(a)(b)(b) === birds.warblerstar(f)(a)(b)))
  );

  it('#warblerstarstar', () =>
    jsc.assert(
      jsc.forall( "nat -> nat -> nat -> nat -> nat"
                , "nat"
                , "nat"
                , "nat"
                , (f, a, b, c) => f(a)(b)(c)(c) === birds.warblerstarstar(f)(a)(b)(c)))
  );
});
