import { Apodeixis, RankingItem } from './core.js';
import { createListItem } from './utils.js';

const apodeixis = new Apodeixis();

const form = document.getElementById("item-form");
const list = document.getElementById("ranking-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const score = document.getElementById("score").value.trim();

  if (!name || !score) return;

  const item = new RankingItem(name, score);
  apodeixis.addItem(item);

  renderList();
  form.reset();
});

function renderList() {
  list.innerHTML = "";
  const items = apodeixis.getItems();
  items.forEach(item => list.appendChild(createListItem(item)));
}
