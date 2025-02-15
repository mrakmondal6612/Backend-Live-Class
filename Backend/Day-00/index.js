// Function --> Normal Fn, Arrow Fn

// function fun() {
//   console.log("Hello");
// }

// fun();

// const fun2 = () => {
//   console.log("Hello, This is Arrow Func.");
// };

// fun2();

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(10, 5));

// let sum2 = (a, b)=>{
//   return a + b;
// }

// console.log(sum2(15, 50))

// Callbace Function

// function sqre(n){
//     return n*n;
// }
// function cube(n) {
//   return n * n * n;
// }

// function sumOfSqure(a, b, calback) {
//   // let sqrre1 = calback(a);   // 1
//   // let sqrre2 = calback(b);   // 4
//   // return sqrre1+sqrre2;   // 1+ 4 = 5
//   return calback(a) + calback(b);
// }

// let ans = sumOfSqure(1, 2, sqre);
// console.log(ans)

// // function sumOfCube(a, b) {
// //   let cube1 = cube(a); // 1
// //   let cube2 = cube(b); // 4
// //   return cube1 + cube2; // 1+ 4 = 5
// // }
// // // let ans = sumOfSqure(1, 2);
// // let ans = sumOfCube(1, 2);
// // console.log(ans);

// Map Function

// let num = [1, 2, 3, 4, 6];

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i])
// }

// // let x = num.map((i)=> i*3 )
// console.log(x)

// Filter

// const n = num.filter(num => num % 2 === 0);
// console.log(n); 


// const users = [
//     { name: "Alice", age: 25 }, 
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 }
// ];

// const olderUsers = users.filter(i => i.age >= 30);
// console.log(olderUsers); 
// // Output: [{ name: "Charlie", age: 35 }]




// Async Function 