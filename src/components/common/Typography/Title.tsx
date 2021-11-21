import React from 'react';
import styled from 'styled-components';

const StyledText = styled.h1`
  font-size: 94px;
  line-height: 94px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Title: React.FC = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

export default Title;
