import React from 'react';
import styled from 'styled-components';

const StyledText = styled.h2`
  font-size: 20px;
  line-height: 26px;
  font-weight: 400;
  margin-bottom: 12px;
`;

const Subtitle: React.FC = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

export default Subtitle;
