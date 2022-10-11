import ListObj from './listObj.js';
import displayList from './displayList.js';

const addNew = () => {
  const addContainer = document.querySelector('.add-score-container');
  const addBtn = document.querySelector('.add-btn');
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const listContainer = document.querySelector('.list-container');

  addBtn.addEventListener('click', () => {
    if (nameInput.value !== '' && scoreInput.value !== '') {
      const listObj = new ListObj(nameInput.value, scoreInput.value);
      listObj.add();
      const listItems = JSON.parse(localStorage.getItem('score-list'));
      console.log(listObj);
      nameInput.value = '';
      scoreInput.value = '';
      displayList(listContainer, listItems);
    }
  });

  addContainer.addEventListener('keypress', (e) => {
    if (nameInput.value !== '' && scoreInput.value !== '') {
      if (e.key === 'Enter') {
        const listObj = new ListObj(nameInput.value, scoreInput.value);
        listObj.add();
        console.log(listObj);
        const listItems = JSON.parse(localStorage.getItem('score-list'));
        nameInput.value = '';
        scoreInput.value = '';
        scoreInput.value = '';
        displayList(listContainer, listItems);
      }
    }
  });
};

export default addNew;
