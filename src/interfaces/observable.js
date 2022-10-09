export default class Observable {
  constructor() {
    this._observers = new Set();
  }
  subscribe(observer) {
    this._observers.add(observer);
  }
  unsubscribe(observer) {
    this._observers = [...this._observers].filter(
      (subscriber) => subscriber !== observer
    );
  }
  notify(data) {
    // 여기서 subscriber는 함수
    this._observers.forEach((subscriber) => subscriber(data));
  }
}
