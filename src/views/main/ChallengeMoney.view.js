export default class ChallengeMoneyView {
  constructor({ model }) {
    this.money = 0;
    this.moneyModel = model;
    this.moneyModel.subscribe(this.render.bind(this)); //Model에 구독
    this.render();
  }
  render() {
    const money = this.moneyModel.getMoney(); //Model의 상태를 가져와서 렌더링
    this.money = `${money} 원`;
  }
}
