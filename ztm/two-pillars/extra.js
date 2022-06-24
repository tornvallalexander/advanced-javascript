// watch out: don't initialize functions in loops
for (let i = 0; i < 5; i++) {
  function a() {}  // should not do this, move it to the top instead
  a()
}

// use default params for best performance (JS will look in the global scope otherwise, which takes resources)
function b(param = 6) {
  return param
}

b()