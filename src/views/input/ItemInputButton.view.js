export default class ItemInputButtonView {
  constructor({ model }) {
    this.$target = document.createElement('div');
    this.$target.className = 'input-button';
    this.$target.textContent = '기록하기';
    this.model = model;
    this.$appMain = document.querySelector('#app-main');
    this.$appItemInput = document.querySelector('#app-item-input');
    this.render();
  }
  render() {
    this.$target.addEventListener('click', this.hideShow.bind(this));
    this.$target.addEventListener('click', this.saveState.bind(this));
  }
  saveState() {
    const $input = document.querySelectorAll('.main-item-input input');
    this.model.setItems({
      name: $input[0].value,
      price: Number(
        $input[1].value.replace('원', '').split(',').join('').trim()
      ),
    });
  }
  hideShow() {
    this.$appMain.style.display = 'flex';
    this.$appItemInput.style.display = 'none';
  }
}
