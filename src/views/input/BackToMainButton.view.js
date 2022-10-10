export default class BackToMainButtonView {
  constructor() {
    this.$target = document.createElement('div');
    this.$target.className = 'back-to-main-button';
    this.$appMain = document.querySelector('#app-main');
    this.$appChallengeInput = document.querySelector('#app-challenge-input');
    this.render();
  }
  render() {
    this.$target.innerHTML = '<';
    this.$target.addEventListener('click', this.hide.bind(this));
  }
  hide() {
    this.$appMain.style.display = 'flex';
    this.$appChallengeInput.style.display = 'none';
  }
}
