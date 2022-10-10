export default class BackToMainButtonView {
  constructor(targetApp) {
    this.$target = document.createElement('div');
    this.$target.className = 'back-to-main-button';
    this.$appMain = document.querySelector('#app-main');
    this.$appTarget = document.querySelector(`#app-${targetApp}`);
    this.render();
  }
  render() {
    this.$target.innerHTML = '<';
    this.$target.addEventListener('click', this.hideShow.bind(this));
  }
  hideShow() {
    this.$appMain.style.display = 'flex';
    this.$appTarget.style.display = 'none';
  }
}
