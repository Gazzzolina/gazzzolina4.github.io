const apply = (num, func, arg) => {
	return (num === 0) ? arg : apply (num-1, func, func(arg));
} 
