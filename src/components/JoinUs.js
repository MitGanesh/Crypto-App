import React, { useContext } from 'react'
import styled from 'styled-components';
import searchContext from '../Context/searchContext';
import { FaTwitter, FaFacebook, FaDiscord, FaYoutube } from 'react-icons/fa';
import img1 from '../Images/img2.png'
import img2 from '../Images/img3.png'
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
`
const Box = styled.div`
  width: 80%;
  margin: auto;
  padding-top: 52px;
  text-align: center;
  display: flex;
  flex-direction: column;

  ${mobile({
    gap: '48px',
  })}
`
const TitleBox = styled.div`
  text-align: center;
`
const Heading1 = styled.h1`
  margin-bottom: 24px;
  font-size: 56px;
  font-weight: 600;
  line-height: 78px;
  color: ${props => props.mode ? 'white' : 'black'};

  ${mobile({
      fontSize: '50px',
  })}
`
const Heading2 = styled.h1`
  font-size: 42px;
  display: inline;
  margin-left: 14px;
  text-transform: uppercase;
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(330deg, #ff00cc, #3333ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`
const InfoText = styled.p`
  font-size: ${props => `${props.size}px`};
  font-weight: 200;
  padding: ${props => `${props.py}px ${props.px}px`};
  color: ${props => props.mode ? 'white' : 'black'};
`
const Button = styled.button`
  padding: 10px 32px;
  color: ${props => props.mode ? 'white' : 'black'};
  border: none;
  background-color: ${props => props.mode ? 'black' : 'white'};
  border: ${props => props.mode ? '1px solid white' : '1px solid black'};

  &:hover{
    background-color: ${props => !props.mode ? 'black' : 'white'};
    color: ${props => !props.mode ? 'white' : 'black'};
  }

`
const FooterBox = styled.div`
  /* padding-top: 12px; */
  display: flex;
  align-items: center;
`
const Image = styled.img`
  width: 350px;
  height: 350px;
  /* border: 1px solid blue; */
  background-position: center;
  object-fit: cover;
`
const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mobile({
    display: 'none',
})}
`
const CenterSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
`
const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
`
const PrivacyRight = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
`
const RightSection = styled.div`
  flex: 1;

  ${mobile({
    display: 'none',
})}
`

const JoinUs = () => {
  const { mode } = useContext(searchContext);
  return (
    <Container id='join'>
      <Box>
        <TitleBox>
          <Heading1 mode={mode}>
            Join us and embark on a journey into the exciting world of
            <Heading2>Crypto</Heading2>
          </Heading1>
          <InfoText mode={mode} size={22} py={18} px={0}>Unlock boundless growth opportunities by investing in the dynamic realm of cryptocurrencies.</InfoText>
          <Button mode={mode}>Join Now</Button>
        </TitleBox>
        <FooterBox>
          <LeftSection>
            <Image src={img2} />
          </LeftSection>
          <CenterSection>
            <SocialIcons>
              <FaTwitter style={{ cursor: 'pointer' }} size={35} color='#1d9bf0' />
              <FaDiscord style={{ cursor: 'pointer' }} size={35} color='#5462eb' />
              <FaFacebook style={{ cursor: 'pointer' }} size={35} color='#1a77f2' />
              <FaYoutube style={{ cursor: 'pointer' }} size={35} color='#f00' />
            </SocialIcons>
            <PrivacyRight>
              <InfoText mode={mode}>
                Privacy
              </InfoText>
              <InfoText mode={mode}>
                Terms of Use
              </InfoText>
            </PrivacyRight>
          </CenterSection>
          <RightSection>
            <Image src={img1} />
          </RightSection>
        </FooterBox>
        <InfoText mode={mode}>All rights are reserved <b>crypto@more.com</b></InfoText>
      </Box>
    </Container>
  )
}

export default JoinUs;