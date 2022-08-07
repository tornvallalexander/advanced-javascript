const pipe = (...fns) => (args) => fns.reduce((acc, curr) => curr(acc), args);

// below implementation looks kind of weird, not really the JS implementation that I'm looking for.
// not sure how we would do this as in Elixir.
const Title = {
  capitalizeSentence(sen) {
    return pipe(
      this.splitOnWhitespace,
      this.capitalizeAll,
      this.joinWithWhitespace,
    )(sen);
  },

  capitalizeAll(arr) {
    return arr.map(s => s.toUpperCase());
  },

  joinWithWhitespace(arr) {
    return arr.join(' ');
  },

  splitOnWhitespace(str) {
    return str.split(' ');
  },
}

console.log(Title.capitalizeSentence('hello world'));