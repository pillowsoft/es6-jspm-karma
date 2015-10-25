'use strict';

import Test from '../src/test/index';

describe('test', () => {

  var test;
  beforeEach(() => {
    test = new Test();
  })

  it('should return', () => {
    expect(test.sayHello()).toEqual('hello there');
  });

  it('should pass', function() {
    expect(2 + 2).toEqual(4);
  });

  it('should fail', function() {
    expect(2 + 2).toEqual(4);
  });
});
