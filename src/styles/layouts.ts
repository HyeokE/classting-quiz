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

export const FormWrapper = styled.div`
  display: flex;
  max-width: 512px;
  min-height: 100vh;
  height: 100%;
  flex-direction: column;
  margin: 0 auto;
`;

export const FormInner = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const TopMargin = styled.div`
  width: 100%;
  height: 20px;
`;
export const TopMarginL = styled.div`
  width: 100%;
  height: 40px;
`;
