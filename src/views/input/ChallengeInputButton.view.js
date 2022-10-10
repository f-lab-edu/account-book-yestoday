export default class ChallengeInputButtonView {
  constructor({ model }) {
    this.$target = document.createElement('div');
    this.$target.className = 'input-button';
    this.$target.textContent = '도전하기';
    this.model = model;
    this.$appMain = document.querySelector('#app-main');
    this.$appChallengeInput = document.querySelector('#app-challenge-input');
    this.render();
  }
  render() {
    this.$target.addEventListener('click', this.saveState.bind(this));
    this.$target.addEventListener('click', this.hide.bind(this));
  }
  saveState() {
    const $input = document.querySelector('.main-challenge-input > input');
    this.model.setMoney(
      Number($input.value.replace('원', '').split(',').join('').trim())
    );
  }
  hide() {
    this.$appMain.style.display = 'flex';
    this.$appChallengeInput.style.display = 'none';
  }
}
