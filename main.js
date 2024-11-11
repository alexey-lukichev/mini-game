// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
const arrNumber = [];

let firstCard = null;
let secondCard = null;

function createNumbersArray(count) {
  for (i = 1; i < count; i++) {
    arrNumber.push(i, i);
  }
}
createNumbersArray(9);

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  for (i = 0; i < arr.length; i++) {
    let random = Math.floor(Math.random() * arr.length);

    temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }
  console.log(arrNumber);
}
shuffle(arrNumber);

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function startGame() {
  let div = document.createElement('div');
  div.classList.add('div');
  let h1 = document.createElement('h1');
  h1.classList.add('h1');
  h1.textContent = 'EURO-2024';
  let ul = document.createElement('ul');
  ul.classList.add('ul')
  let div2 = document.createElement('div');
  div2.classList.add('wrapper');
  let button = document.createElement('button');
  button.classList.add('button');
  button.textContent = 'Сыграть еще раз';
  
  for (card of arrNumber) {
    let li = document.createElement('li');
    li.classList.add('card');

    console.log(card);
    li.textContent = card;

    li.addEventListener('click', function() {

      if (li.classList.contains('open') || li.classList.contains('success')) {
        return;
      }

      if (firstCard !== null && secondCard !== null) {
        firstCard.classList.remove('open');
        secondCard.classList.remove('open');
        firstCard = null;
        secondCard = null;
      }

      li.classList.add('open');

      if (firstCard === null) {
        firstCard = li;
      } else {
        secondCard = li;
      };

      if (firstCard !== null && secondCard !== null) {
        if (firstCard.textContent === secondCard.textContent) {
          firstCard.classList.add('success');
          secondCard.classList.add('success');
        }
      }

      if (arrNumber.length === document.querySelectorAll('.success').length) {
        setTimeout(function() {
          alert('ПОЗДРАВЛЯЕМ!')
        }, 400)
      }
    });

    button.addEventListener('click', function() {
      location.reload();
    })

    ul.append(li);
  }

  div.append(h1, ul);
  div.append(div2);
  div2.append(button);
  document.body.append(div);
}
startGame();