import React from 'react';
import {
  FormInner,
  FormWrapper,
  TopMargin,
  TopMarginL,
} from '../../styles/layouts';
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
    <FormWrapper>
      <FormInner
        initial="start"
        animate="end"
        exit="out"
        variants={pageTransitionAnimate}
        transition={pageAnimate}
      >
        <TopMarginL />
        <Title>안녕하세요</Title>
        <TopMargin />
        <MainText>
          퀴즈를 풀이하시기 전에 주의사항을 꼭 숙지하시고 진행하시기 바랍니다.
        </MainText>
        <TopMargin />
        <BulletListWrapper>
          <BulletList
            text={
              '주의사항 주의사항 주의사항 주의사항 1\n 주의사항 주의사항 주의사항 주의사항 2\n 주의사항 주의사항 주의사항 주의사항 3\n 주의사항 주의사항 주의사항 주의사항 4\n 주의사항 주의사항 주의사항 주의사항 5\n 주의사항 주의사항 주의사항 주의사항 6'
            }
          />
        </BulletListWrapper>
        <TopMargin />
        <MainText>시작버튼을 누르면 타이머가 실행됩니다.</MainText>
        <ButtonWrapper>
          <ClasstingButton
            text={'시작하기'}
            onClick={() => {
              navigate('/0');
            }}
          />
        </ButtonWrapper>
      </FormInner>
    </FormWrapper>
  );
};

export default Home;
