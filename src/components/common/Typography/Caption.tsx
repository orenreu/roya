import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  font-size: 10px;
  line-height: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  text-transform: uppercase;
`;

type Props = Record<string, unknown>;

const Caption: React.FC<Props> = ({ children, ...rest }) => (
  <StyledText {...rest}>{children}</StyledText>
);

export default Caption;
