function make() {
  let arr = [];
  let store = function () {

    if (typeof arguments[0] === 'function') {
      return arr.reduce((result, item) => arguments[0](result, item));
    } else {
      arr.push(...arguments);
    }
    return store;
  };
  return store(...arguments);
}

module.exports = make;
