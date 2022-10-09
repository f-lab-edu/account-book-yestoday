import Observable from '../interfaces/observable';

export default class SpendItemModel extends Observable {
  constructor() {
    super();
    this.items = [
      { id: 1, name: '아메리카노', price: 4500 },
      { id: 2, name: '치즈돈까스', price: 8500 },
      { id: 3, name: '문구류', price: 8000 },
    ];
    this.id = 1;
  }
  getItems() {
    return this.items;
  }
  setItems({ name, price }) {
    this.items.push({ id: this.id, name: name, price: price });
    this.notify(this.items);
    this.id++;
  }
}
