// поверх

let a = +prompt('what`s floor?');
let password;
if(a < 1 || a > 9) {
    alert("wrong floor");
} else {
    if(a >= 1 && a <= 3)  {
        alert("ok");
    } if(a >=7 && a <= 9) {
        alert("ok");
    }
    if(a >= 4 && a <= 6) {
        password = +prompt('enter password');
        if(password === 1337) {
            alert("ok");
        } else {
            alert("wrong password");
        }
    }
}
