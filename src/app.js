import './style.scss';
import ChallengeMoneyModel from './models/ChallengeMoney.model';
import ChallengeMoneyView from './views/main/ChallengeMoney.view';
import SpendItemModel from './models/SpendItem.model';
import SpendMoneyView from './views/main/SpendMoney.view';

const $app = document.querySelector('#app');

// 메인페이지 - 도전 금액 적용 부분
const challengeMondeyModel = new ChallengeMoneyModel();
const challengeMoneyView = new ChallengeMoneyView({
  model: challengeMondeyModel,
});

const $headerRight = document.querySelector('.header__right');
$headerRight.appendChild(challengeMoneyView.$target);

// 메인페이지 - 총 소비 금액 적용 부분
const spendItemModel = new SpendItemModel();
const spendMoneyView = new SpendMoneyView({ model: spendItemModel });

const $mainHeader = document.querySelector('.main__header');
$mainHeader.appendChild(spendMoneyView.$target);
