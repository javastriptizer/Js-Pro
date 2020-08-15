const SECONDS = 60;

const MY_YEAR = 22;

const seconds_in_one_day = 1440 * SECONDS; 

const seconds_in_one_month = 30 * seconds_in_one_day; 

const seconds_in_one_year = 365 * seconds_in_one_day; 

const minute_in_my_year = seconds_in_one_year / SECONDS * MY_YEAR;

console.log("Секунд в одном дне = " + seconds_in_one_day + " сек.");

console.log("Секунд в одном месяце = " + seconds_in_one_month + " сек.");

console.log("Секунд в одном году = " + seconds_in_one_year + " сек.");

console.log("Возвраст в минутах = " + minute_in_my_year + " мин.");

