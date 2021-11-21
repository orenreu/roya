import React from 'react';
import styled from 'styled-components';
import { Subtitle, Text } from './Typography';

const Container = styled.footer`
  color: ${({ theme }) => theme.palette.white};
  padding: 20px 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  padding: 0 4vw;
`;

const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled(Subtitle)`
  margin: 0;
`;

const StyledText = styled(Text)`
  margin: 8px;
`;

const Footer = () => {
  const year = new Date().getUTCFullYear();

  return (
    <Container>
      <Content>
        <LogoWrapper>
          <StyledLogo>royâ</StyledLogo>
          <StyledText>all rights reserved © {year}</StyledText>
        </LogoWrapper>
      </Content>
    </Container>
  );
};

export default Footer;
