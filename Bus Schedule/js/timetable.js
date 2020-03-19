let firstDate = '11:43';
let secondDate = '13:14';

let getDate = (string) => new Date(0, 0, 0, string.split(':')[0], string.split(':')[1]); //получение даты из строки (подставляются часы и минуты
let different = (getDate(secondDate) - getDate(firstDate));

let hours = Math.floor((different % 86400000) / 3600000);
let minutes = Math.round(((different % 86400000) % 3600000) / 60000);
let result = hours + ':' + minutes;

console.log(result);