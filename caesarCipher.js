
function caesarCipher(str) {
  const map = {};
  let res = '';
  for(let i = 0; i < 26; i++) {
    map[String.fromCharCode(65+i)] = String.fromCharCode((i < 25) ? 65+i+1 : 65);
    map[String.fromCharCode(97+i)] = String.fromCharCode((i < 25) ? 97+i+1 : 97);
  }

  for(let i = 0; i < str.length; i++) {
    if(str[i] in map) {
      res += map[str[i]];
    } else {
      res += str[i];
    }
  }

  return res;
}

export default caesarCipher;