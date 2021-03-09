const hour_tens = document.getElementsByClassName("hour-tens");
const hour_digits = document.getElementsByClassName("hour-digits");
const minute_tens = document.getElementsByClassName("minute-tens");
const minute_digits = document.getElementsByClassName("minute-digits");
const second_tens = document.getElementsByClassName("second-tens");
const second_digits = document.getElementsByClassName("second-digits");
const test = document.getElementsByClassName("test");

// test[2].innerHTML = '待開發';

// const setDate1 = () => {

//   let date = new Date();
//   let hour = date.getHours();
//   let minute = date.getMinutes();
//   let second = date.getSeconds();

//   let hourT = parseInt((hour % 100) / 10);
//   let hourD = parseInt(hour % 10);
//   let minT = parseInt((minute % 100) / 10);
//   let minD = parseInt(minute % 10);
//   let secT = parseInt((second % 100) / 10);
//   let secD = parseInt(second % 10);

//   hour_tens[0].style.transform = `rotate( ${hourT * 120}deg )`;
//   hour_digits[0].style.transform = `rotate( ${hourD * 36}deg )`;
//   minute_tens[0].style.transform = `rotate( ${minT * 60}deg )`;
//   minute_digits[0].style.transform = `rotate( ${minD * 36}deg )`;
//   second_tens[0].style.transform = `rotate( ${secT * 60}deg )`;
//   second_digits[0].style.transform = `rotate( ${secD * 36}deg )`;

// }

// setDate1();

// let num;
// let count;
// const doit = (num) => {
//   num = num + .1
//   count ++;
//   // second_tens[0].style.transform = `rotate( ${num * 60}deg )`;
//   test[1].innerHTML = num;
// }
    
// function ani(num) {
//   let count = 0;
//   var tt = setInterval( doit(num), 10);
      
//   if(count > 10 ){
//     // clearInterval(tt);
//   }
// }
    

const setDate = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let millisecond = date.getMilliseconds();

  let hourT = parseInt((hour % 100) / 10);
  let hourD = parseInt(hour % 10);
  let minT = parseInt((minute % 100) / 10);
  let minD = parseInt(minute % 10);
  let secT = parseInt((second % 100) / 10);
  let secD = parseInt(second % 10);
  let secD_10 = secD/10;
  let newtt = secT+secD_10;
  // let ms = parseInt((millisecond % 1000) /100);
  let ms = parseInt((millisecond % 1000)/100)/10;
  let newt = ms+secD;
            
  hour_tens[0].style.transform = `rotate( ${hourT * 120}deg )`;
  hour_digits[0].style.transform = `rotate( ${hourD * 36}deg )`;
  minute_tens[0].style.transform = `rotate( ${minT * 60}deg )`;
  minute_digits[0].style.transform = `rotate( ${minD * 36}deg )`;
  second_tens[0].style.transform = `rotate( ${secT * 60}deg )`;
  second_tens[0].style.transform = `rotate( ${newtt * 60}deg )`;

  if(secD > 8){
    // ani(secT);
  }
  second_digits[0].style.transform = `rotate( ${newt * 36}deg )`;


  // test[0].innerHTML = `分鐘個位${secD} <br> 分鐘小數一位${newt} <br> 分鐘十位 ${secT} 分鐘小數一位${newtt}`;

}

setInterval(setDate, 100);