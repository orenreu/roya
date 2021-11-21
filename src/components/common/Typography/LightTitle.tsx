import React from 'react';
import styled from 'styled-components';

const StyledText = styled.h2`
  font-size: 16px;
  line-height: 22px;
  font-weight: 300;
  margin-bottom: 12px;
`;

const LightTitle: React.FC = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

export default LightTitle;
