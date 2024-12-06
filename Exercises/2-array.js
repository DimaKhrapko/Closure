'use strict';

const array = () => {
  const data = [];
  const get = (i) => data[i];
  get.push = (x) => data.push(x);
  get.pop = (x) => data.pop(x);
  return get;
};

module.exports = { array };
