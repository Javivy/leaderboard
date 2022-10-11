export default class ListObj {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  add() {
    const scoresList = JSON.parse(localStorage.getItem('score-list')) || [];
    scoresList.push(this);
    localStorage.setItem('score-list', JSON.stringify(scoresList));
  }

  remove() {
    const scoresList = JSON.parse(localStorage.getItem('score-list')) || [];
    const filteredList = scoresList.filter((li) => li.title !== this.title);
    localStorage.setItem('books', JSON.stringify(filteredList));
  }
}
