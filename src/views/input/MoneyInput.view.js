export default class MoneyInputView {
  constructor() {
    this.$target = document.createElement('input');
    this.$target.setAttribute('type', 'text');
    this.$target.setAttribute('placeholder', '금액을 입력해주세요');
    this.render();
  }

  render() {
    this.$target.addEventListener('blur', this.blurHandler.bind(this));
    this.$target.addEventListener('click', this.clickHandler.bind(this));
  }

  blurHandler() {
    this.$target.value = Number(this.$target.value).toLocaleString() + ' 원';
  }
  clickHandler() {
    if (this.$target.value === '') return;
    this.$target.value = this.$target.value.replace('원', '');
    this.$target.value = this.$target.value.split(',').join('').trim();
  }
}
