import styled from 'styled-components';

export const StopWatchNumber = styled.span`
  font-size: ${(props) => props.theme.fontSize.body2};
  color: ${(props) => props.theme.color.grey900};
`;
export const StopWatchWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.color.classting};
  border-radius: 20px;
  padding: 7px 10px;
`;
