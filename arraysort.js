let employees = [ { firstName: 'John', lastName: 'Doe', age: 27, joinedDate: 'December 15, 2017' }, { firstName: 'Ana', lastName: 'Rosy', age: 25, joinedDate: 'January 15, 2019' }, { firstName: 'Zion', lastName: 'Albert', age: 30, joinedDate: 'February 15, 2011' } ];

 let employee2 = employees.sort((a, b) => a.age - b.age);
 console.log(employee2);