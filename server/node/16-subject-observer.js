const { Subject } = require('rxjs/Subject');
const data$ = require('./fixtures/16-data');

const subject = new Subject();

/** TODO:
  1. Subscribe to `subject` and log it's output
  2. Use the `subject` to subscribe to `data$`
*/

/**
  NOTE: expected output
  0
  1
  2
  3
  4
  5
  6
  7
  8
  9
  done
*/
