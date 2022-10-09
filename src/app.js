import './style.scss';

import ChallengeMoneyModel from './models/ChallengeMoney.model';
import ChallengeMoneyView from './views/main/ChallengeMoney.view';

import SpendItemModel from './models/SpendItem.model';
import SpendMoneyView from './views/main/SpendMoney.view';
import SpendItemView from './views/main/SpendItem.view';

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
