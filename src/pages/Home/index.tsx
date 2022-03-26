import React from 'react';
import { FormInner, FormWrapper, TopMargin } from '../../styles/layouts';
import { ClasstingButton } from '../../components/common/Button';
import { MainText, Title } from '../../components/common/Title/title';
import BulletList from '../../components/common/BulletList';
import { BulletListWrapper, ButtonWrapper } from './styled';
import {
  pageAnimate,
  pageTransitionAnimate,
} from '../../components/animations/pageAnimation';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <FormWrapper layoutId={'form-border'}>
      <FormInner
        initial="start"
        animate="end"
        exit="out"
        variants={pageTransitionAnimate}
        transition={pageAnimate}
      >
        <Title>안녕하세요 OOO님</Title>
        <TopMargin />
        <MainText>
          진행하기 전에 주의사항을 꼭 숙지하시고 진행하시기 바랍니다.
        </MainText>
        <TopMargin />
        <BulletListWrapper>
          <BulletList
            text={
              '주의사항 주의사항 주의사항 주의사항 1\n 주의사항 주의사항 주의사항 주의사항 2\n 주의사항 주의사항 주의사항 주의사항 3'
            }
          />
        </BulletListWrapper>
        <TopMargin />
        <ButtonWrapper>
          <ClasstingButton
            text={'퀴즈 풀기'}
            onClick={() => {
              navigate('/quiz/0');
            }}
          />
        </ButtonWrapper>
      </FormInner>
    </FormWrapper>
  );
};

export default Home;
