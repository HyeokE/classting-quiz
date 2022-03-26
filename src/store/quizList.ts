import { atom } from 'recoil';

export const QuizList = 'quizList';
export const QuizListState = [
  {
    category: '',
    type: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answers: [''],
  },
];
export const quizListState = atom<typeof QuizListState>({
  key: QuizList,
  default: QuizListState,
});
