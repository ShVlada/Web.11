function readNumber() {
    let a;
  
    do {
      a = prompt("Введите ваше число:", 0);
    } while ( !isFinite(a) );
  
    if (a === null || a === '') return null;
  
    return +a;
  }
  
  alert(`Число: ${readNumber()}`);
