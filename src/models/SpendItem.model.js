import Observable from '../interfaces/observable';

export default class SpendItemModel extends Observable {
  constructor() {
    super();
    this.items = [];
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
  removeItem({ id }) {
    this.items = this.items.filter((item) => item.id !== +id);
    this.notify(this.items);
  }
}
