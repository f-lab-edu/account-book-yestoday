import './style.scss';

import ChallengeMoneyModel from './models/ChallengeMoney.model';
import ChallengeMoneyView from './views/main/ChallengeMoney.view';

import SpendItemModel from './models/SpendItem.model';
import SpendMoneyView from './views/main/SpendMoney.view';
import SpendItemView from './views/main/SpendItem.view';

import BackToMainButtonView from './views/input/BackToMainButton.view';
import MoneyInputView from './views/input/MoneyInput.view';
import ChallengeInputButtonView from './views/input/ChallengeInputButton.view';

import ItemNameInputView from './views/input/ItemNameInput.view';
import ItemInputButtonView from './views/input/ItemInputButton.view';

// 메인페이지 - 도전 금액
const challengeMondeyModel = new ChallengeMoneyModel();
const challengeMoneyView = new ChallengeMoneyView({
  model: challengeMondeyModel,
});

const $headerRight = document.querySelector('.header__right');
$headerRight.appendChild(challengeMoneyView.$target);

// 메인페이지 - 총 소비 금액
const spendItemModel = new SpendItemModel();
const spendMoneyView = new SpendMoneyView({ model: spendItemModel });

const $mainHeader = document.querySelector('.main__header');
$mainHeader.appendChild(spendMoneyView.$target);

// 메인페이지 - 각 소비 아이템 리스트
const spendItemView = new SpendItemView({ model: spendItemModel });

const $spendList = document.querySelector('.spend-list');
$spendList.innerHTML += spendItemView.$target;

// 도전 금액 입력 페이지 - 뒤로가기 버튼
const challengeInputBackButtonView = new BackToMainButtonView(
  'challenge-input'
);

const $headerChallengeInput = document.querySelector('.header-challenge-input');
$headerChallengeInput.appendChild(challengeInputBackButtonView.$target);

// 도전 금액 입력 페이지 - 금액 입력
const challengeMoneyInputView = new MoneyInputView();

const $mainChallengeInput = document.querySelector('.main-challenge-input');
$mainChallengeInput.appendChild(challengeMoneyInputView.$target);

// 도전 금액 입력 페이지 - 도전하기 버튼
const challengeInputButtonView = new ChallengeInputButtonView({
  model: challengeMondeyModel,
});

const $footerChallengeInput = document.querySelector('.footer-challenge-input');
$footerChallengeInput.appendChild(challengeInputButtonView.$target);

// 소비 품목 입력 페이지 - 뒤로가기 버튼
const itemInputBackButtonView = new BackToMainButtonView('item-input');

const $headerItemInput = document.querySelector('.header-item-input');
$headerItemInput.appendChild(itemInputBackButtonView.$target);

// 소비 품목 입력 페이지 - 품목명 입력
const itemNameInputView = new ItemNameInputView();

const $itemInputName = document.querySelector('.item-input-name');
$itemInputName.insertAdjacentElement('afterend', itemNameInputView.$target);

// 소비 품목 입력 페이지 - 금액 입력
const itemMoneyInputView = new MoneyInputView();

const $itemInputmoney = document.querySelector('.item-input-money');
$itemInputmoney.insertAdjacentElement('afterend', itemMoneyInputView.$target);

// 소비 품목 입력 페이지 - 기록하기 버튼
const itemInputButtonView = new ItemInputButtonView({ model: spendItemModel });

const $footerItemInput = document.querySelector('.footer-item-input');
$footerItemInput.appendChild(itemInputButtonView.$target);
