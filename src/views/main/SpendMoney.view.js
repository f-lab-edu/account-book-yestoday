export default class ChallengeMoneyView {
  constructor({ model }) {
    this.model = model;
    this.$target = document.createElement('div');
    this.$target.className = 'spend-money';
    this.spendMoney = 0;
    this.model.subscribe(this.render.bind(this));
    this.render();
  }
  render() {
    const items = this.model.getItems();
    items.forEach((item) => (this.spendMoney += item.price));
    this.$target.innerHTML = `${this.spendMoney.toLocaleString()} 원`;
  }
}
