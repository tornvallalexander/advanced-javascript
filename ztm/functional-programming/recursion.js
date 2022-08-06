const pipe = (...fns) => (args) => fns.reduce((acc, curr) => curr(acc), args);

const data = {
  user: {
    firstName: "John",
    lastName: "Doe",
  },
  address: {
    streetName: "123 Main St",
    location: {
      city: "New York",
      state: "NY",
      zip: "10001",
    }
  }
}

console.log(flatten(data));

// flatten object
function flatten(obj, parent, res = {}) {
  for ([key] of Object.entries(obj)) {
    const name = pipe(
      // (str) => str.split('.'),
      separateCapital,
      capitalize,
      join,
    )(key);

    if (typeof obj[key] === 'object') {
      flatten(obj[key], name, res);
    } else {
      res[name] = obj[key];
    }
  }
  return res;
}

function separateCapital(str) {
  return str.split(/(?=[A-Z])/);
}

function join(arr) {
  return arr.join(' ');
}

function capitalize(arr) {
  return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}