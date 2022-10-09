import './style.scss';
import ChallengeMoneyModel from './models/ChallengeMoney.model';
import ChallengeMoneyView from './views/main/ChallengeMoney.view';

console.log('Hello, World! Hello, Jayden!');

const $app = document.querySelector('#app');
const challengeMondeyModel = new ChallengeMoneyModel();
const challengeMoneyView = new ChallengeMoneyView({
  model: challengeMondeyModel,
});

const $challengeMoney = document.querySelector('.challenge-money');
$challengeMoney.innerHTML = challengeMoneyView.money;
