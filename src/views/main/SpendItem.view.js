export default class SpendItemView {
  constructor({ model }) {
    this.model = model;
    this.$target = ``;
    this.model.subscribe(this.render.bind(this));
    this.render();
  }
  render() {
    const items = this.model.getItems();
    items.forEach(
      (item) =>
        (this.$target += `
        <div class="spend-item spend-item-${item.id}">
          <div class="item-name item-name-${item.id}">${item.name}
          </div>
          <div class="item-money item-money-${
            item.id
          }">${item.price.toLocaleString()} 원
          </div>
        </div>
        `)
    );
    console.log(this.$target);
  }
}
