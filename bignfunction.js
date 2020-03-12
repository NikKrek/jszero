//https://zero.p2p.shpp.me/tasks/5_1_func_get_max_number.html

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
