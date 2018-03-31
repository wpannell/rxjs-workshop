const { Subject } = require('rxjs/Subject');
const { filter } = require('rxjs/operators');
const scarce$ = require('./fixtures/17-scarce');
const createLoggingObserver = require('./helpers/createLoggingObserver');

const fizzObserver = createLoggingObserver('fizz');
const buzzObserver = createLoggingObserver('buzz');
const fizzbuzzObserver = createLoggingObserver('fizzbuzz');

/** TODO:
  `scarce$` will error if you subscribe to it more than once!!
  1. Notify `fizzObserver` of all values from `scarce$` divisible by 3.
  2. Notify `buzzObserver` of all values from `scarce$` divisible by 5.
  3. Notify `fizzbuzzObserver` of all values from `scarce$` divisible by 3 AND 5.
*/
// FINAL_START
const subject = new Subject();

const subF = subject.pipe(filter(x => x % 3 === 0))
  .subscribe(fizzObserver);
const subB = subject.pipe(filter(x => x % 5 === 0))
  .subscribe(buzzObserver);
const subFB = subject.pipe(filter(x => x % 15 === 0))
  .subscribe(fizzbuzzObserver);

const connection = scarce$.subscribe(subject);
// FINAL_END

/**
  NOTE: expected output
  fizz 0
  buzz 0
  fizzbuzz 0
  fizz 3
  buzz 5
  fizz 6
  fizz 9
  buzz 10
  fizz 12
  fizz 15
  buzz 15
  fizzbuzz 15
  fizz 18
  fizz done
  buzz done
  fizzbuzz done
*/
