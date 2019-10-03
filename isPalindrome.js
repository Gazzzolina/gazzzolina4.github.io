const isPalindrome = (str) => {
  const index = str.length;
  if (index <= 1) {
    return true;
  }
  if (str.substr(0, 1) !== str.substr(index - 1, 1)) {
    return false;
  }  
  return isPalindrome(str.substr(1, index -2));
  } 