const substr = (str, startIndex, subLenght) => {
  str = str.toString();
  if (subLenght < 0) {
    subLenght = 1;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (subLenght === 0 || startIndex > str.length) {
    return '';
  }
  if (startIndex + subLenght-1 > str.length) {
    subLenght = str.length - startIndex;
  }
  if (typeof str === 'string' && typeof startIndex === 'number' && typeof subLenght === 'number') {
    let result = '';
    for (let i = 0; i < subLenght; i += 1) {
      result += str[startIndex + i];
    }
    return result;
  }
  if (typeof startIndex === 'string' || typeof subLenght === 'string') {
    return "Проверьте входные данные!";
    }
  return str;
}
