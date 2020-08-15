let n = +prompt('Введите число: ', 0);

function sum_v1(n) {    
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }

  function sum_v2(n) {
    if (n == 1){
        return 1;
    } else {
    return n + sum_v2(n - 1);
    } 
}

  alert(`Итог c циклом = ${sum_v1(n)} \nИтог с рекурсией = ${sum_v2(n)}`);

  
  
  
