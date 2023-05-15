var last =  function(array, n) {
    if (array == null) 
      return void 0;
    if (n == null) 
       return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));  
    };
  
  console.log(last([4, 8, 1, -6]));//output will be -6
  console.log(last([4, 8, 1, -6],3));//output will be [8,1,-6]
  console.log(last([4, 8, 1, -6],6));//output will be [4,8,1,-6]
  
  
