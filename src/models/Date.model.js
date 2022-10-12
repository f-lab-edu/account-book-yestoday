import Observable from '../interfaces/observable';

export default class DateModel extends Observable {
  constructor() {
    super();
    this.date = new Date();
  }
  getDate() {
    return this.date;
  }
  setDate(date) {}
}
