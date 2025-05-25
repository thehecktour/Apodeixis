export class RankingItem {
    constructor(name, score) {
      this.name = name;
      this.score = Number(score);
    }
  }
  
  export class Apodeixis {
    #items = [];
  
    addItem(item) {
      if (!(item instanceof RankingItem)) {
        throw new Error("Invalid item type");
      }
      this.#items.push(item);
      this.sortItems();
    }
  
    sortItems() {
      this.#items.sort((a, b) => b.score - a.score);
    }
  
    getItems() {
      return [...this.#items];
    }
  }
  