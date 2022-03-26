import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{
  size?: string;
  disable?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 13px 40px;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.body2};
  color: ${(props) => props.color};
  border: 0 solid;
  ${(props) =>
    props.disable &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
      background: ${(props) => props.theme.color.classtingDisable};
    `}
  ${(props) =>
    props.size === 'large' &&
    css`
      padding: 10px 70px;
    `}
  border-radius: 50px;
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.classting};
`;
