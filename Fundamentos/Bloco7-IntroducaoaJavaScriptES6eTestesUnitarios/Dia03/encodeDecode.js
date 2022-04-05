function encode(string) {
  let stringParaArray = string.split('');
  for (let i = 0; i < stringParaArray.length; i += 1) {
    if (stringParaArray[i] === 'a') {
      stringParaArray[i] = 1;
    } else if (stringParaArray[i] === 'e') {
      stringParaArray[i] = 2;
    } else if (stringParaArray[i] === 'i') {
      stringParaArray[i] = 3;
    } else if (stringParaArray[i] === 'o') {
      stringParaArray[i] = 4;
    } else if (stringParaArray[i] === 'u') {
      stringParaArray[i] = 5;
    }
  }
  return stringParaArray.join('');
}

function decode(string) {
  let stringParaArray = string.split('');
  for (let i = 0; i < stringParaArray.length; i += 1) {
    if (stringParaArray[i] === '1') {
      stringParaArray[i] = 'a';
    } else if (stringParaArray[i] === '2') {
      stringParaArray[i] = 'e';
    } else if (stringParaArray[i] === '3') {
      stringParaArray[i] = 'i';
    } else if (stringParaArray[i] === '4') {
      stringParaArray[i] = 'o';
    } else if (stringParaArray[i] === '5') {
      stringParaArray[i] = 'u';
    }
  }
  return stringParaArray.join('');
}
