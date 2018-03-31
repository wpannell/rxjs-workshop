const noisyUnsubscriber = require('./fixtures/22-noisy-unsubscriber');

// NOTE: Setup
const sourceA$ = noisyUnsubscriber('a');
const sourceB$ = noisyUnsubscriber('b');
const sourceC$ = noisyUnsubscriber('c');

/** TODO:
  using only a *single* subscribe call:

  1. subscribe to all three sources (`sourceA$`, `sourceB$`, `sourceC$`), and
     log their values to console.
  2. unsubscribe from `sourceA$` after 900ms
  3. unsubscribe from the other two after 1300ms
*/
// FINAL_START
const { merge } = require('rxjs/observable/merge');
const { timer } = require('rxjs/observable/timer');
const { takeUntil } = require('rxjs/operators');

merge(
  sourceA$.pipe(takeUntil(timer(900))),
  sourceB$,
  sourceC$
)
.pipe(takeUntil(timer(1300)))
.subscribe(x => console.log(x));
// FINAL_END
/**
  NOTE: expected output
  a: 0
  b: 0
  c: 0
  a: 1
  b: 1
  c: 1
  a: 2
  b: 2
  c: 2
  a: 3
  b: 3
  c: 3
  a unsubscribed
  b: 4
  c: 4
  b: 5
  c: 5
  b unsubscribed
  c unsubscribed
*/
