import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components';
import searchContext from '../Context/searchContext';
import img1 from '../Images/crypto.png'
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  margin-top: 200px;
  position: relative;
`
const Box = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  gap: 48px;
`

const FloatingImg1 = styled.img`
  position: absolute;
  top: -160px;
  left: 80px;
  z-index: -5;
  opacity: 0.6;

  ${mobile({
  left: '-135px',
  scale: '0.6',
  top: '-240px',
})}
`
const TitleBox = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 16px 0px;
  text-align: right;
  justify-content: center;

  ${mobile({
  marginTop: '0px',
})}
`
const H1 = styled.div`
  font-size: 60px;
  font-weight: 900;
  font-family: 'Raleway', sans-serif;
  color: ${props => !props.mode ? '#242526' : 'white'};

  ${mobile({
  fontSize: '55px',
})}
`
const SubH1 = styled.div`
  display: inline;
  margin-left: 12px;
  font-size: 42px;
  text-transform: uppercase;
  font-family: 'Press Start 2P', cursive;
  background: linear-gradient(330deg, #ff00cc, #3333ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

const GridContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 38px 0px;

  ${mobile({
  flexDirection: 'column',
})}
`
const GridBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  margin-bottom: 15px;
  width: 80px;
  height: 80px;
`
const Heading = styled.h2`
  padding: 4px 0px;
  color: ${props => !props.mode ? '#242526' : 'white'};
`
const Price = styled.p`
  padding: 4px 0px;
  color: ${props => !props.mode ? '#242526' : 'white'};
`

const AnimationBox = styled.div`
  overflow-x: hidden;
  border-left: 1px solid ${props => !props.mode ? 'black' : '#494451'};
  border-right: 1px solid ${props => !props.mode ? 'black' : '#494451'};
`
const moveText = keyframes`
  0% {
    transform: translateX(20%); /* Start position of the text */
  }
  100% {
    transform: translateX(-100%); /* End position of the text */
  }
`

const TextContent = styled.p`
  color: ${props => !props.mode ? 'black' : 'white'};
  display: inline-block;
  align-items: center;
  text-transform: uppercase;
  font-size: 72px;
  font-weight: 700;
  white-space: nowrap;
  animation: ${moveText} 25s linear infinite;
`

const MainText = styled.span`
  color: transparent;
  font-size: 84px;
  font-weight: 700;
  text-transform: uppercase;
  font-style: italic;
  -webkit-text-stroke: ${props => props.mode ? '2px white' : '2px black'};
  text-stroke: 2px black;
`

const Landing = () => {
  const context = useContext(searchContext);
  const { mode, mainData } = context;


  const currencyFormat = (num) => {
    return '₹' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <Container>
      <Box>
        <FloatingImg1 src={img1} />
        <TitleBox>
          <H1 mode={mode}>
            Discover the Future
            <br />
            Exploring the World of
            <SubH1>
              Crypto
            </SubH1>
          </H1>
        </TitleBox>
        <GridContainer>
          {mainData && mainData.slice(0, 4).map((item) => (
            <GridBox key={item?.id}>
              <Image src={item?.image} />
              <Heading mode={mode}>{item?.name}</Heading>
              <Price mode={mode}>{currencyFormat(item?.current_price)}</Price>
            </GridBox>
          ))}
        </GridContainer>
        <AnimationBox mode={mode}>
          <TextContent mode={mode}>
            Unleash the Power of <MainText mode={mode}>Crypto</MainText> Explore, Analyze, and <MainText mode={mode}>Invest</MainText> in the World's Leading Digital <MainText mode={mode}>Currencies</MainText> on Our Comprehensive Listing Platform.
          </TextContent>
        </AnimationBox>
      </Box>
    </Container>
  )
}

export default Landing;