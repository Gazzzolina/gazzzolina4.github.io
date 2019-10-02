const isPalindrome = (str) => {
  let Num = str.length;
  if (Num <= 1) {
    return true;
  }
  if ( str.substr(0, 1) !== str.substr(Num - 1, 1)) {
    return false;
  } else {
  return isPalindrome(str.substr(1, Num -2));
  }
} 
