// Initialize an array with 2 values in it (apples and oranges)
// const fruits=["apples","oranges"];
// console.log(fruits[0]);

// const values=[1,2,3,4,5];
// const new_values = values.map(values => values * 3.5);
// console.log(new_values);
// .map method returns a new array with a specific condition for example here we are multipying each element in the array by 3.5
// the returned array does not affect the original array => example if we display the values array it will remain the same.

// the .filter() method in js creates a new array with all elements that pass the test implemented by the provided function.it does not modify the original array, instead it returns a new array containing only the elements for which the provided function returns true.

// const employees = [
//     { name: 'Bilal', status: 'CTO', age: 27 },
//     { name: 'Anthony', status: 'Lead Software Engineer', age: 30 },
//     { name: 'Hovig', status: 'Developer', age: 22 },
//     { name: 'Joe', status: 'intern', age: 24 }
//   ];

//   const interns = employees.filter(employee => employee.status === 'intern'); //this piece of code filters the employees whose status is intern
//   console.log(interns[0].name);//filter() method returns as array, so even if our array contains one element, so here interns is an array of objects,so we should use the subscript operator to access  the interns name
  


//   const internsAgedMoreThan23 = interns.filter(intern => intern.age > 23);
//   console.log(internsAgedMoreThan23);

// array.reduce() , it is used when we want to execute a reducer function for array element, it returns a single value, the function's accumulated result, it does not execute the function for empty array elements., and finally the methode does not change the original array
// Additional info : reduece() method is a powerful method in javascript that iterates over the array and returns a single value where you pass to it the function.

// to get the summation of the ages , we should first get all the ages using .map() method
// const ages = employees.map(employee => employee.age);
// const AddedAges = ages.reduce((accumulator , currentValue) => {return accumulator + currentValue;},0);
// console.log(AddedAges);


// Promises:
// what is the difference between asynchronous and synchronous?
// Answer: if we want to talk simply , synchronous as meaning is a thing that happens at the same time , but Asynchronous is the opposit => it does not happen at the same time 
// in other words in Synchronous Transmission there is no time gap present between data. it is more efficient and reliable than asynchronous transmission to transfer a large amount of data.
// In Asynchronous Transmission, data is sent in form of byte or character.
// synchronous transmission is faster than asynchronous.
// in In synchronous transmission, users have to wait till the transmission is complete before getting a response back from the server.  
// what are promises:
// Answer: A promise is an object representing the eventual completion or failure of an asycnchronous operation.
// In javascript, a Promise is an object that will produce a single value some time in the future


// Write a promise that resolves when getting a value:
// example 2
// let p = new Promise((resolve , reject) => {
//     let a = 1 + 1;
//     if (a == 2){
//         resolve('success');
//     }
//     else 
//     {
//         reject('failed');
//     }
// })

// p.then((message) => {
//     console.log('This is in the then ' + message)
// }).catch((message) => {
//     console.log('This is in the catch ' + message )
// })
// Answer example 2
// function getValue(value) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(value);
//         }, 1000)
//     });
// }
// getValue(42).then(result => {
//     console.log(result);
// }).catch(error => {
//     console.log(error);
// });


// Write a promise that rejects when getting an error
// function getError() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const error = new Error("Something went wrong!");
//         reject(error);
//       }, 1000); 
//     });
//   }
  
//   getError().then(result => {
//     console.log(result);
//   }).catch(error => {
//     console.error(error.message);
//   });


//   Should we use async await, or .then() ?
//   Answer: Both async await and then are used to handle asynchronous operations in javascript, but they have different syntaxes and use cases.
//   In conclusion, the choice between async/await and .then() largely depends on your coding style preference, readability requirements, and the specific use case of your asynchronous operations. Both are valid and powerful tools for handling asynchronous code in JavaScript.



// What is Promise.all()
// the Promise.all() method is used to wait for all promises to resolve, and then the values are logged. if any promise.all in javascript is rejected, the catch block captures the first rejection.
// example :
// const promise1 = new Promise(resolve => setTimeout(() => resolve('One'), 1000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Two'), 2000));
// const promise3 = new Promise(resolve => setTimeout(() => resolve('Three'), 3000));
// Promise.all([promise1, promise2, promise3])
//   .then(values => console.log(values))
//   .catch(error => console.error(error));


//   What is Promise.race()
//   Answer: The Promise. race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.
//   When do we use promise.all and when do we use promise.race.
//   Answer:Promise.all is used when you have multiple promises and you want to wait for all of them to resolve or any one of them to reject.while Promise.race is used when you have multiple promises and you want to proceed as soon as any one of them resolves or rejects.


//   Is setTimeout an asynchronous function?
//   Answer: yes setTimeout is an asynchronous function in javascript
// example :

// console.log('Start');
// setTimeout(() => {
//     console.log('Timeout callback');
//   }, 2000);
  
//   console.log('End');
  

// what are callbacks
// Answer: A javascript callback is a function which is to be executed after another function has finished execution
// In JavaScript, a callback is a function that is passed as an argument to another function and is intended to be called (or executed) at a later time. Callbacks are a key feature of JavaScript's handling of asynchronous operations.
// example: 
// function greeting(name) 
// {
//     console.log('Hello '+ name);
// }
// function processUserInput(callback)
// {
//     var name = 'John';
//     callback(name);
// }
// processUserInput(greeting);


// Lodash part
// const lodash = require('lodash');

// const employees = [ 
//     { name: 'Bilal', status: 'CTO', age: 27 },
//     { name: 'Anthony', status: 'Lead Software Engineer', age: 30 },
//     { name: 'Hovig', status: 'Developer', age: 100 },
//     { name: 'Joe', status: 'intern', age: 24 }
// ];
// Using lodash function, get the employee with the highest age.
// Asnwer:
// const employeeWithHighestAge = lodash.maxBy(employees, 'age');
// console.log(employeeWithHighestAge.name);

// Using lodash function, order the array by age (Descending).
// Answer
// const orderArrayByAge = lodash.orderBy(employees, 'age', 'desc');
// console.log(orderArrayByAge);

// Using lodash function, order the array by age (Ascending).
// Answer:
// const orderArrayByAge = lodash.orderBy(employees, 'age', 'asc');
// console.log(orderArrayByAge);

// Using lodash function, get the age of Anthony
// Answer:

// const anthony = lodash.find(employees,{name: 'Anthony'});
// const  AgeOfAnthony = anthony.age;
// console.log(AgeOfAnthony);

// Using lodash functions, get the status of the developers and then snake case the string.
// Answer;

// const developerStatuses = lodash.map(lodash.filter(employees, {status: 'Developer'}), 'status');
// const snakeCasedStatuses = lodash.map(developerStatuses, lodash.snakeCase);
// console.log(snakeCasedStatuses);
