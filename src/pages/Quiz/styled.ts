import styled, { css } from 'styled-components';
type selectedType = 'unset' | 'true' | 'false';
export type difficultyType = 'easy' | 'medium' | 'hard' | undefined;

export const Question = styled.h2`
  font-size: ${(props) => props.theme.fontSize.h5};
`;
export const SubTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
export const Difficulty = styled.div<{ difficulty: difficultyType }>`
  font-size: ${(props) => props.theme.fontSize.body2};
  font-weight: 400;
  color: ${(props) => props.theme.color.grey600};
  ${(props) =>
    props.difficulty === 'easy' &&
    css`
      color: ${props.theme.color.green500};
    `}${(props) =>
    props.difficulty === 'medium' &&
    css`
      color: ${props.theme.color.yellow500};
    `}${(props) =>
    props.difficulty === 'hard' &&
    css`
      color: ${props.theme.color.red500};
    `}
  margin-bottom: 10px;
`;
export const AnswerExample = styled.div<{ checkAnswer: selectedType }>`
  padding: 15px 20px;
  border: 1px solid ${(props) => props.theme.color.classting};
  background: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.grey900};
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontSize.body1};
  margin-bottom: 15px;
  transition: all 0.2s ease-out;
  ${(props) =>
    props.checkAnswer === 'true' &&
    css`
      background: ${(props) => props.theme.color.classting600};
      color: ${(props) => props.theme.color.white};
      cursor: not-allowed;
    `}${(props) =>
    props.checkAnswer === 'false' &&
    css`
      background: ${(props) => props.theme.color.red300};
      color: ${(props) => props.theme.color.white};
      cursor: not-allowed;
    `} ${(props) =>
    props.checkAnswer === 'unset' &&
    css`
      background: ${(props) => props.theme.color.white};
      color: ${(props) => props.theme.color.grey900};
      &:hover {
        cursor: pointer;
        background: ${(props) => props.theme.color.classting};
        color: ${(props) => props.theme.color.white};
      }
    `}
`;
