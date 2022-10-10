export default class ChallengeMoneyView {
  constructor({ model }) {
    this.$appMain = document.querySelector('#app-main');
    this.$appChallengeInput = document.querySelector('#app-challenge-input');
    this.$target = document.createElement('div');
    this.$target.className = 'challenge-money';
    this.moneyModel = model;
    this.moneyModel.subscribe(this.render.bind(this)); //Model에 구독
    this.render();
  }
  render() {
    const money = this.moneyModel.getMoney(); //Model의 상태를 가져와서 렌더링
    this.$target.innerHTML = `${money.toLocaleString()} 원`;
    this.$target.addEventListener('click', this.hideShow.bind(this));
  }
  hideShow() {
    this.$appMain.style.display = 'none';
    this.$appChallengeInput.style.display = 'flex';
  }
}
