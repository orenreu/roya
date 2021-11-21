import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 12px;
`;

const Text: React.FC = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

export default Text;
