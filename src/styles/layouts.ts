import styled from 'styled-components';
import { motion } from 'framer-motion';

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 320px;
`;

export const FormWrapper = styled(motion.div)`
  box-sizing: border-box;
  padding: 40px 50px;
  border: 1px solid #e6e6e6;
  border-radius: 20px;
  max-width: 512px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const FormInner = styled(motion.div)``;
export const TopMargin = styled.div`
  width: 100%;
  height: 20px;
`;
export const TopMarginL = styled.div`
  width: 100%;
  height: 40px;
`;
