import './style.scss';
import ChallengeMoneyModel from './models/ChallengeMoney.model';
import ChallengeMoneyView from './views/main/ChallengeMoney.view';

const $app = document.querySelector('#app');

// 메인페이지 - 도전 금액 적용 부분
const challengeMondeyModel = new ChallengeMoneyModel();
const challengeMoneyView = new ChallengeMoneyView({
  model: challengeMondeyModel,
});

const $headerRight = document.querySelector('.header__right');
$headerRight.appendChild(challengeMoneyView.$target);
