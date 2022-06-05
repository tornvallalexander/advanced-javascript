// function scope (js has this -- partially, not for const/let)
// vs
// block scope (most other langs have this)

if (5 > 4) {
  var secret = "12342"
}

if (5 > 4) {
  const secret = "12342"
  // block scope
}

secret