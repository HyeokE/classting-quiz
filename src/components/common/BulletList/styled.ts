import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledLi = styled(motion.li)`
  position: relative;
  padding-left: 20px;
  margin: 8px 0;
  font-size: ${(props) => props.theme.fontSize.body2};
  list-style: none;
  color: ${(props) => props.theme.color.grey800};
  &:before {
    position: absolute;
    top: -4px;
    left: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 23px;
    color: ${(props) => props.theme.color.classting};
    text-align: center;
    content: '•';
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
