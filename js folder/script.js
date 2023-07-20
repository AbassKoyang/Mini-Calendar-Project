// Collecting elements from html file (All Variables)

const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const actualDate = new Date();

// Arrays for all the days and dates in WORDS

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] ;
const allMonths = ["January", "February", "March", "April",  "May", "June", "July", "August", "September", "October", "November", "December"] ;



date.innerHTML = actualDate.getDate();
day.innerHTML = weekDays[actualDate.getDay()];
month.innerHTML = allMonths[actualDate.getMonth()];
year.innerHTML = actualDate.getFullYear();

