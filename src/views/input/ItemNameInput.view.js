export default class ItemNameInputView {
  constructor() {
    this.$target = document.createElement('input');
    this.$target.setAttribute('type', 'text');
    this.$target.setAttribute('placeholder', '품목을 입력해주세요');
  }
}
