

console.log(12.3);
var userAge = 15;
console.log(userAge);
{var userAge = 80
console.log(userAge);//80
}
console.log('USER AGE', userAge);//80


// let num0 = 11;
// if (num0 % 2) {
//     console.log('odd');
// } else {
//     console.log('even');
// }


let num1 =8
if (num1 > 7 && num1 % 3 === 0) {
    console.log('win');
} else {
    console.log('lose');
}


let num2 = 8
if (num2 < 7 && num2 % 3) {
    console.log('lose');
} else {
    console.log('win');
}


let num3 = 6;
if (num3 % 2 === 0 && num3 > 0) {
    console.log(num3+5);
} else {
    if (num3 % 2 && num3 > 0) {
        console.log(num3*2);
    } else {
        if (num3 % 2 === 0 && num3 < 0) {
            console.log(-num3);
        } else {
            console.log(num3);           
        }
    }    
}

let num4 = -2;
if (num4 > 0) {
if (num4 % 2 === 0) {
    console.log(num4+5);
} else {
    console.log(num4+5);
}    
} else {
 if (num4 < 0 && num4 % 2 ===0 ) {
    console.log(-num4);
 }else
console.log(num4);
}

