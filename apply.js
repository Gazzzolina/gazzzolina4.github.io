const apply = (num, func, arg) => {
  if (typeof func === 'function' && typeof num === 'number' && typeof arg === 'number') {
    return (num === 0) ? arg : apply (num-1, func, func(arg));
  }
  return 'Check the input data!';
}
