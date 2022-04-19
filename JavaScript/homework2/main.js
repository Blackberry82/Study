/*/!*let x = 1;*!/
if (x !== 0) {
    console.log(true);
} else {
    console.log(false);
}*/


/*
let x = 0;
if (x !== 0) {
    console.log(true);
} else
    console.log(false);
*/

let x = -3;
if (x !==0) {
    console.log(true);
} else {
    console.log(false);
}


/*let time = +prompt('enter from 0 to 59');
  if (time <= 14) {
    console.log('quater1');
  } else if (time >= 15 && time <=29) {
    console.log('quater2');
} else if (time >=30 && time <=44) {
    console.log('quater3');
} else if (time >=45 && time <= 59) {
      console.log('quater4');
  } else {
      console.log('?????');
  }*/



let day = +prompt('enter from 1 to 31');
if (day <= 10) {
    console.log('decade 1');
}  else if (day >=11 && day <=20) {
    console.log('decade 2');
}  else if(day >=21 && day <=31) {
    console.log('decade 3');
} else {
    console.log('!!!!!');
}

/*
let week = +prompt('enter number of day');
switch (week) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friday');
        break;
    case 6:
        console.log('saturday');
        break;
    case 7:
        console.log('sunday');
        break;
 default:
        console.log('???????');
}
*/

let a  = 0;
let b = 0;
if (a > b) {
    console.log('a');
} else if (a < b){
    console.log(b);
} else if (a === b){
    console.log('equal');
}
