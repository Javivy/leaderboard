const displayList = (listContainer, list) => {
  if (list.length === 0) {
    listContainer.innerHTML = '<p class="no-list">No score added yet</p>';
    // Remove border from list container
    listContainer.style.border = 'none';
  } else {
    listContainer.style.border = '4px solid #fff';
    listContainer.innerHTML = '';
    list.forEach((listItem, index) => {
      const li = document.createElement('li');

      li.classList.add('list-item');

      li.innerHTML = `${listItem.user}: <span class="score-number">${listItem.score}<span>`;
      listContainer.appendChild(li);
      // Different background for odd and even list
      if (index % 2 === 0) {
        listContainer.lastElementChild.style.backgroundColor = '#DDD';
      } else {
        listContainer.lastElementChild.style.backgroundColor = '#fff';
      }
    });
  }
};

export default displayList;