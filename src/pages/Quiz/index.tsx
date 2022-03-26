import React, { useLayoutEffect, useState } from 'react';
import { quizListMock } from '../../api/mock/quizListMock';
import { useNavigate, useParams } from 'react-router-dom';
import { FormInner, TopMargin } from '../../styles/layouts';
import { FormWrapper } from '../../styles/layouts';
import { ClasstingButton } from '../../components/common/Button';
import { ButtonWrapper } from '../Home/styled';
import {
  pageAnimate,
  pageTransitionAnimate,
} from '../../components/animations/pageAnimation';
import { SubTitle, Title } from '../../components/common/Title/title';
import {
  AnswerExample,
  Difficulty,
  difficultyType,
  Question,
  SubTitleWrapper,
} from './styled';
import { QuizType } from '../../types/quiz';

const Quiz = () => {
  const [selectAnswer, setSelectAnswer] = useState<string>('');
  const [quiz, setQuiz] = useState<string[]>();
  const navigate = useNavigate();
  const { id } = useParams();
  const quizData = quizListMock[Number(id)];

  const mixAnswers = (incorrect_answers: string[], correct_answer: string) => {
    const answers = [...incorrect_answers, correct_answer];
    setQuiz(answers.sort(() => Math.random() - 0.5));
  };
  const replaceString = (str: string) => {
    return str.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
  };

  const checkAnswer = (selected: string, correct_answer: string) => {
    console.log(selected, correct_answer);
    if (selected === correct_answer) {
      return 'true';
    }
    if (selected === '') {
      return 'unset';
    } else {
      return 'false';
    }
  };
  const submit = checkAnswer(selectAnswer, quizData.correct_answer) == 'unset';
  const onClick = () => {
    if (!submit) {
      Number(id) >= 9
        ? navigate('/result')
        : navigate(`/quiz/${Number(id) + 1}`);
    }
  };
  const selectExample = (answer: string) => {
    submit && setSelectAnswer(answer);
  };

  useLayoutEffect(() => {
    mixAnswers(quizData.incorrect_answers, quizData.correct_answer);
  }, []);

  return (
    <FormWrapper layoutId={'form-border'}>
      <FormInner
        initial="start"
        animate="end"
        exit="out"
        variants={pageTransitionAnimate}
        transition={pageAnimate}
      >
        {quizData && quiz && (
          <div>
            <SubTitleWrapper>
              <SubTitle>{quizData.category}</SubTitle>
              <Difficulty
                difficulty={quizData.difficulty as keyof difficultyType}
              >
                {quizData.difficulty}
              </Difficulty>
            </SubTitleWrapper>

            <Question>{replaceString(quizData.question)}</Question>
            <TopMargin />
            {quiz.map((answer) => (
              <AnswerExample
                key={answer}
                onClick={() => selectExample(answer)}
                checkAnswer={checkAnswer(selectAnswer, quizData.correct_answer)}
              >
                {answer}
              </AnswerExample>
            ))}
          </div>
        )}
        <ButtonWrapper>
          <ClasstingButton
            text={'다음으로'}
            onClick={onClick}
            disable={submit}
          />
        </ButtonWrapper>
      </FormInner>
    </FormWrapper>
  );
};

export default Quiz;
