let daysLook = document.querySelector('.days');
let hoursLook = document.querySelector('.hours');
let minutesLook = document.querySelector('.minutes');
let nowDate = document.querySelector('.now-date');
let monthTitle = document.querySelector('.month-title');
let daysTitle = document.querySelector('.days-title');
let monthValue = document.querySelector('.month-value');
let daysValue = document.querySelector('.days-value');



/*Коректне відображення дати початку навчання на телах*/
Date.parse("2021-07-30T00:00:00");
var d = new Date(Date.parse("2021-07-30T00:00:00"));

//86400000 - ms в дне
let today = new Date();
let start = d.toString();
let days = (today - d) / 86400000;
let hours = (days - parseInt(days)) * 24;
let minutes = (hours - parseInt(hours)) * 60;

daysLook.textContent = parseInt(days);
hoursLook.textContent = parseInt(hours);
minutesLook.textContent = parseInt(minutes);

/*end counter*/

/*now date*/
let normMonth = new Date().getMonth() + 1;
let dateNorm = new Date().getDate();

if (dateNorm >= 1 && dateNorm <= 9) {
  dateNorm = '0' + dateNorm;
}
if (normMonth >= 1 && normMonth <= 9) {
  normMonth = '0' + normMonth;
}
let goodFormatDate = dateNorm + '.' + normMonth + '.' + new Date().getFullYear();

nowDate.textContent = goodFormatDate;


/*відображення місяця 
monthTitle.textContent = 'місяць';
*/





// Записуємо к-ть місяців
monthValue.textContent = Math.floor((daysLook.textContent) / 30);
let monthOver = (daysLook.textContent) / 30;

// записуємо к-ть днів

let daysInMonth = Math.floor((monthOver - monthValue.textContent) * 30);
daysValue.textContent = Math.floor(daysInMonth);
//daysValue.textContent = 1;

// і змінюємо daysTitle в задежності від числа дня

if (daysValue.textContent == 1 || daysValue.textContent == 21) {
  daysTitle.textContent = 'день';
}
if (daysValue.textContent >= 2 && daysValue.textContent <= 4 || daysValue.textContent >= 22 && daysValue.textContent <= 24) {
  daysTitle.textContent = 'дні';
}
if (daysValue.textContent >= 5 && daysValue.textContent <= 20 || daysValue.textContent >= 25) {
  daysTitle.textContent = 'днів';
}


// Змінюємо слово "місяць" в залежності від числа місяця

if (monthValue.textContent == 1) {
  monthTitle.textContent = 'місяць';
}
if (monthValue.textContent >= 2 && monthValue.textContent <= 4) {
  monthTitle.textContent = 'місяці';
}
if (monthValue.textContent >= 5) {
  monthTitle.textContent = 'місяців';
}

/* сортування від найменшого в масіві

let usersByDay = [812, 1360, 657, 1247, 165];
console.log(usersByDay);

for (let i = 0; i <= usersByDay.length - 2; i++) {
  let minValue = usersByDay[i];

  for (let j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      let swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}
console.log(usersByDay);
*/