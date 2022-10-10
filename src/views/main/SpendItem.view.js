export default class SpendItemView {
  constructor({ model }) {
    this.model = model;
    this.model.subscribe(this.render.bind(this));
    this.$spendList = document.querySelector('.spend-list');
    this.$spendList.addEventListener('dblclick', (event) => {
      if (!event.target.classList.contains('spend-item')) return;
      this.model.removeItem({ id: event.target.classList[1].split('-')[2] });
    });
    this.render();
  }
  render() {
    this.$target = ``;
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
        </div>`)
    );
    this.$spendList.innerHTML = this.$target;
  }
}
