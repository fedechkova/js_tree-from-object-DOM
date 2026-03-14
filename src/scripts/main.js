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
  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    element.appendChild(li);

    if (Object.keys(data[key]).length) {
      const ul = document.createElement('ul');

      li.appendChild(ul);
      createTree(ul, data[key]);
    }
  }
}

createTree(tree, food);

/* const tree = document.querySelector('#tree');

function createTree(element, data) {
  const ul = document.createElement('ul');

  element.append(ul);

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;
    ul.append(li);

    if (Object.keys(data[key]).length) {
      createTree(li, data[key]);
    }
  }
}

createTree(tree, food);
 */
