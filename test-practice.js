function capitalize(s) {
  const capitalizedStr = s.replace(s[0], s[0].toUpperCase());
  return capitalizedStr;
}

function reverseString(s) {
  let res = '';
  for(let i = 0; i < s.length; i++) {
    res += s[s.length - i - 1];
  }
  return res;
}

const calculator = {
  add(a, b) {
    return a+b;
  },
  subtract(a, b) {
    return a-b;
  },
  multiply(a, b) {
    return a*b;
  },
  divide(a, b) {
    return a/b;
  }
}

module.exports = {capitalize, reverseString, calculator};