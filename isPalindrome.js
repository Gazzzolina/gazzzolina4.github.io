function isPalindrome(str) {
  if (typeof str === 'number') {
    var res = true;
    str = str.toString().toLowerCase().replace(/\s/g,'');
    for(var i=0, j=parseInt(str.length/2), k=str.length-1; i<j; i++, k--) {
      if(str.charAt(i) != str.charAt(k)) {
        res = false;
        break;
      }
    }
    return res;
  }
  const index = str.length;
  if (index <= 1) {
    return true;
  }
  if (str.substr(0, 1) !== str.substr(index - 1, 1)) {
    return false;
  }
  return isPalindrome(str.substr(1, index -2));
}
