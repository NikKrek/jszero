function max(a, b) {
if( a > b) {
    return console.log(a);
} else {
   return console.log(b)
}
}

let a = +prompt("введи перше число")
let b = +prompt("введи друге число")

console.log(max(a,b));
