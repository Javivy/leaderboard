import './index.css';
import addNew from './modules/add.js';

const listItems = JSON.parse(localStorage.getItem('score-list')) || [];
const listContainer = document.querySelector('.list-ul');

if (listItems.length === 0) {
  listContainer.innerHTML = '<p class="no-list">No Items added yet</p>';
  // Remove border from list container
  listContainer.style.border = 'none';
} else {
  listContainer.style.border = '2px solid #444';
  const showList = (obj) => {
    obj.forEach((listItem, index) => {
      const ul = document.createElement('ul');
      const li = document.createElement('li');

      li.classList.add('list-item');

      li.textContent = `${listItem.name}: ${listItem.score}`;
      ul.appendChild(li);
      listContainer.append(ul);
      // Different background for odd and even list
      if (index % 2 === 0) {
        listContainer.lastElementChild.style.backgroundColor = '#DDD';
      } else {
        listContainer.lastElementChild.style.backgroundColor = '#fff';
      }
    });
  };

  showList(listItems);
}

addNew();
