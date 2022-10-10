export default class MoneyInputView {
  constructor() {
    this.$target = document.createElement('input');
    this.$target.setAttribute('type', 'text');
    this.$target.setAttribute('placeholder', '금액을 입력해주세요');
    this.render();
  }

  render() {
    this.$target.addEventListener('blur', this.handleBlur.bind(this));
    this.$target.addEventListener('click', this.handleClick.bind(this));
  }

  handleBlur() {
    this.$target.value = Number(this.$target.value).toLocaleString() + ' 원';
  }
  handleClick() {
    if (this.$target.value === '') return;
    this.$target.value = this.$target.value.replace('원', '');
    this.$target.value = this.$target.value.split(',').join('').trim();
  }
}
