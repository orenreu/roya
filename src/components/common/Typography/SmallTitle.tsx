import React from 'react';
import styled from 'styled-components';

const StyledText = styled.h3`
  font-size: 46px;
  line-height: 56px;
  font-weight: 400;
  margin: 0;
  margin-bottom: 12px;
`;

const SmallTitle: React.FC = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

export default SmallTitle;
