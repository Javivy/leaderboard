import './index.css';
import addNew from './modules/add.js';
import displayList from './modules/displayList';

const listItems = JSON.parse(localStorage.getItem('score-list'));

displayList(listItems);
addNew();
