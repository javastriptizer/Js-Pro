const number_one=+prompt('Введите первое число', 0);

const operator=prompt('Введите операцию * / - +');

const number_two=+prompt('Введите второе число', 0);

let total = NaN;

switch (operator) {
   case '-':
      total=number_one - number_two;
      break;

   case '+':
      total=number_one + number_two;
      break;
      
   case '*':
      total=number_one * number_two;
      break;
   
   case '/':
      total=number_one / number_two;
      break;

   default:
      alert('Неверно введен логический оператор!');
      break;
}

if (!parseInt(number_one) && number_one != 0 || !parseInt(number_two) && number_two != 0) {
   alert('Неверно введено число!');
   window.location.reload();
} else {
   alert('Итог: ' + total);
   window.location.reload();
}


