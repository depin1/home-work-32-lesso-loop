 let myArayy = [1998, 2001, 2000, 2003, 2009];
 let now = 2023;
 const funi = function(params) {
     return now - params
 }
 for (let index = 0; index < myArayy.length; index++) {
     console.log(funi(myArayy[index]));

 }




 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 let num = 2;
 const fun = function(params) {
     return params * num


 }

 for (let index = 0; index < numbers.length; index++) {
     console.log(fun(numbers[index]));
 }