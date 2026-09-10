/**
 * @return {Function}
 */

const createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

const fn = createHelloWorld();
fn();
