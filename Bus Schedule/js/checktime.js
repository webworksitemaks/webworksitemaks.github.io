let t = new Date();
t.setHours(t.getHours() + 1);


var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
var months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];



let myDate = new Date();
let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] +
    " " + myDate.getFullYear() + ", " + days[myDate.getDay()] + " " + t.getHours() + ":" +
    t.getMinutes();

alert(fullDate);