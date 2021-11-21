import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const BoldText: React.FC = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

export default BoldText;
