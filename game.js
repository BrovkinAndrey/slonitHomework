function getRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * max) + min;
}

function game() {
  let min = 1;
  let max = 100;
  let guessNumber;
  // Компьютер 1 загадал число: 
  const secretNumber = getRandomNumber(min, max);

  // ход игры 
  let move = 0;
  do {
    move++;
    // Компьютер 2 пытается угадать число: 
    guessNumber = Math.floor((min + max) / 2);
    console.log(`Компьютер 2: Попытка ${move}. Пробую число ${guessNumber}.`);
    // Компьютер 1 даёт подсказку: 
    if(guessNumber > secretNumber) { 
      console.log('Компьютер 1: Меньше.');
      console.log(`Компьютер 2: Значит число в диапозоне от ${min} до ${guessNumber}`);
      max = guessNumber;
    } else if(guessNumber < secretNumber) {
      console.log('Компьютер 1: Больше.');
      console.log(`Компьютер 2: Значит число в диапозоне от ${guessNumber} до ${max}`);
      min = guessNumber;
    }
  } while(guessNumber !== secretNumber)

  console.log('Компьютер 1: Угадал!');
}

game();