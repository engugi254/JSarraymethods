function filter_array_values(arr){
return arr.filter(x => x || x === 0);
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0])); // [58, "abcd", true]