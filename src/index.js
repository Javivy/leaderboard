import './index.css';
import addNew from './modules/add.js';
import refresh from './modules/refresh.js';

refresh();
addNew();

const listContainer = document.querySelector('.list-ul');

listContainer.innerHTML = '<p style="color: #fff; font-weight: bold">Refresh to see the scores</p>';