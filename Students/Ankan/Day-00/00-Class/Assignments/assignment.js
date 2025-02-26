// Callback Function


function sqre(n){
    return n*n;
}
function cube(n) {
  return n * n * n;
}
const sumOfSquare = (a, b) => sqre(a) + sqre(b);
let ans1 = sumOfSquare(1, 2);
console.log(ans1);



const sumOfCube = (a, b) => cube(a) + cube(b);

let ans2 = sumOfCube(1, 2);
console.log(ans2);
