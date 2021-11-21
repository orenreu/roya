import {
  AppleLogo,
  Envelope,
  FacebookLogo,
  InstagramLogo,
  SpotifyLogo,
  TwitterLogo,
  YoutubeLogo,
} from 'phosphor-react';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import { SmallTitle, Title } from '../components/common/Typography';
import { useTheme } from '../context/ThemeProvider';
import breakpoints from '../styles/breakpoints';

const Background = styled.div`
  background: url('images/bg.webp') no-repeat;
  background-size: 100vw 100vh;
  background-attachment: fixed;
  background-position: right;
  width: 100%;
  height: 100vh;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 48px;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Iframe = styled.iframe`
  width: 350px;
  height: 196.88px;
  border-radius: 4px;

  @media ${breakpoints.Medium} {
    width: 560px;
    height: 315px;
  }

  @media ${breakpoints.Large} {
    width: 800px;
    height: 450px;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
`;

const SocialLink = styled.div``;

const index = () => {
  const { theme } = useTheme();
  const socialLinks = [
    {
      url: 'https://www.instagram.com/oa_roya/',
      icon: <InstagramLogo color={theme.palette.white} size={32} />,
    },
    {
      url: 'https://open.spotify.com/artist/5aDlxoxZYM0JnlFuFzf9VV?si=SabNptLeSwqyvKrPEBSxaQ',
      icon: <SpotifyLogo color={theme.palette.white} size={32} />,
    },
    {
      url: 'https://www.youtube.com/channel/UCxe1kMDPHDki7Mklk322poA',
      icon: <YoutubeLogo color={theme.palette.white} size={32} />,
    },
    {
      url: 'mailto:info@roya.fm',
      icon: <Envelope color={theme.palette.white} size={32} />,
    },
  ];
  return (
    <Background>
      <Layout>
        <TextContainer>
          <Title>royâ</Title>
          <SmallTitle>lights on</SmallTitle>
        </TextContainer>
        <VideoContainer>
          <Iframe
            src="https://www.youtube.com/embed/lb7mS66GAIQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Iframe>
        </VideoContainer>
        <SocialWrapper>
          <SocialContainer>
            {socialLinks.map(socialLink => (
              <SocialLink key={socialLink.url}>
                <a target="_blank" href={socialLink.url}>
                  {socialLink.icon}
                </a>
              </SocialLink>
            ))}
          </SocialContainer>
        </SocialWrapper>
      </Layout>
    </Background>
  );
};

export default index;
