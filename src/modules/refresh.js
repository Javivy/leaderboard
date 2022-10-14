import displayList from './displayList.js';
import { getGames } from './getGames.js';

const refreshBtn = document.querySelector('.refresh-btn');
const listContainer = document.querySelector('.list-ul');

const refresh = async () => {
  refreshBtn.addEventListener('click', () => {
    getGames()
      .then((res) => displayList(listContainer, res));
  });
};

export default refresh;