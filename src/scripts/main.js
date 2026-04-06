'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // чи об'єкт не порожній.перевірка.
  // Якщо ключів немає не потрібно створювати список.
  if (Object.keys(data).length === 0) {
    return;
  }

  // робимо основний елемент списку <ul>
  const ul = document.createElement('ul');

  // ітеруємося
  for (const key in data) {
    // робимоелемент пункту списку <li>
    const li = document.createElement('li');
    li.textContent = key; // пишемоназву ключа в текст елемента

    //  РЕКУРСІЯ: викликаємо цю ж функцію для внутрішнього об'єкта.
    // Передаємо поточний <li> як новий контейнер і вкладений об'єкт data[key].
    createTree(li, data[key]);

    // Додаємо готовий <li> до нашого <ul>
    ul.append(li);
  }

  // додаємо весь побудований список у початковий контейнер
  container.append(ul);
}

createTree(tree, food);
