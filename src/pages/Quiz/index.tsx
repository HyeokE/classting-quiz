import React from 'react';
import { quizListMock } from '../../api/mock/quizListMock';
import { useNavigate, useParams } from 'react-router-dom';
import { FormInner } from '../../styles/layouts';
import { FormWrapper } from '../../styles/layouts';
import { ClasstingButton } from '../../components/common/Button';
import { ButtonWrapper } from '../Home/styled';

const Quiz = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const quizData = quizListMock[Number(id)];
  const onClick = () => {
    Number(id) >= 9 ? navigate('/result') : navigate(`${Number(id) + 1}`);
  };

  return (
    <FormWrapper>
      <FormInner>
        {quizData && (
          <div>
            <h1>{quizData.category}</h1>
            <p>{quizData.difficulty}</p>
            <p>{quizData.question}</p>
            <p>{quizData.correct_answer}</p>
            <p>{quizData.incorrect_answers}</p>
          </div>
        )}
        <ButtonWrapper>
          <ClasstingButton text={'다음으로'} onClick={onClick} />
        </ButtonWrapper>
      </FormInner>
    </FormWrapper>
  );
};

export default Quiz;
