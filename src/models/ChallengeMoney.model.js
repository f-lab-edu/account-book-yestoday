import Observable from '../interfaces/observable';

export default class ChallengeMoneyModel extends Observable {
  constructor() {
    super();
    this.money = 0;
  }
  getMoney() {
    return this.money;
  }
  setMoney(money) {
    this.money = money;
    this.notify(this.money);
  }
}
