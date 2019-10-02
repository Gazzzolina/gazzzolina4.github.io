const isPalindrome = (str) => {
  const letterNumber = str.length;
  if (letterNumber <= 1) {
    return true;
  }
  if ( str.substr(0, 1) !== str.substr (letterNumber - 1, 1)) {
    return false;
  }  
  return isPalindrome(str.substr(1, letterNumber -2));
  } 