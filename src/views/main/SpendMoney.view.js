export default class ChallengeMoneyView {
  constructor({ model }) {
    this.model = model;
    this.$target = document.createElement('div');
    this.$target.className = 'spend-money';
    this.$appMain = document.querySelector('#app-main');
    this.$appItemInput = document.querySelector('#app-item-input');
    this.model.subscribe(this.render.bind(this));
    this.render();
  }
  render() {
    this.spendMoney = 0;
    const items = this.model.getItems();
    items.forEach((item) => (this.spendMoney += item.price));
    this.$target.innerHTML = `${this.spendMoney.toLocaleString()} 원`;
    this.$target.addEventListener('click', this.hideShow.bind(this));
    this.$target.addEventListener('click', this.resetInput.bind(this));
  }
  hideShow() {
    this.$appMain.style.display = 'none';
    this.$appItemInput.style.display = 'flex';
  }
  resetInput() {
    const $itemInput = document.querySelectorAll('.main-item-input input');
    $itemInput.forEach((ele) => (ele.value = ''));
  }
}
