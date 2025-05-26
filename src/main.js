import { Apodeixis, RankingItem } from './core.js';
import { createListItem } from './utils.js';

const apodeixis = new Apodeixis();

const form = document.getElementById("item-form");
const list = document.getElementById("ranking-list");
const nameInput = document.getElementById("name");
const scoreInput = document.getElementById("score");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = nameInput.value.trim();
  const score = scoreInput.value.trim();

  nameInput.classList.toggle("invalid", !name);
  scoreInput.classList.toggle("invalid", !score);

  if (!name || !score) return;

  const item = new RankingItem(name, score);
  apodeixis.addItem(item);

  renderList();
  form.reset();

  nameInput.classList.remove("invalid");
  scoreInput.classList.remove("invalid");
});

function renderList() {
  list.innerHTML = "";
  const items = apodeixis.getItems();
  items.forEach(item => list.appendChild(createListItem(item)));
}
