import axios from 'axios';

class Api {
  private link: string;
  constructor() {
    this.link = 'https://opentdb.com/api.php?amount=10&type=multiple';
  }
  getQuizList = (amount: string) => {
    return axios.get(`${this.link}?amount=${amount}type=multiple`);
  };
}

export default new Api();
