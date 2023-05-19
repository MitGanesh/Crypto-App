import React, { useContext } from 'react'
import styled from 'styled-components';
import { FaWallet, FaPencilRuler, FaSatelliteDish, FaChessKnight, FaBoxes } from "react-icons/fa";
import { CgBolt } from "react-icons/cg";
import searchContext from '../Context/searchContext';
import img from '../Images/img4.png'
import { mobile } from '../responsive';


const Container = styled.div`
  width: 100%;
  padding: 88px 0px;
`
const Heading = styled.h1`
  padding-bottom: 32px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: ${props => !props.mode ? '#242526' : 'white'};
`
const Box = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  row-gap: 16px;

  ${mobile({
    flexDirection: 'column',
  })}
`
const Columns = styled.div`
  flex: 1;
  padding: 18px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
`

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  /* border:  1px solid red; */
  background-image: url(${img});
  object-fit: cover;
  background-position: center;
`

const Card = styled.div`
  display: flex;
  padding: 16px;
  gap: 24px;
  border: 1px solid ${props => !props.mode ? 'black' : '#494451'};
  border-radius: 18px;
  background-color: ${props => !props.mode ? 'white' : 'black'};
  color: ${props => !props.mode ? 'black' : 'white'};

  ${mobile({
    minWidth: '340px'
  })}
`
const LestSection = styled.div`

`
const ImageBox = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: linear-gradient(45deg,#2600fc,#ff00ea);
`
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
`
const CardTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 26px;
`
const CardInfo = styled.p`
  margin: 0;
`

const Benefits = () => {
  const context = useContext(searchContext);
  const { mode } = context;

  return (
    <Container id='why-crypto'>
      <Heading mode={mode}>Why Crypto</Heading>
      <Box>
        <Columns>
          <Card mode={mode}>
            <LestSection>
              <ImageBox>
                <FaWallet fontSize={30} color='white' />
              </ImageBox>
            </LestSection>
            <RightSection>
              <CardTitle>CONNECT YOUR WALLET</CardTitle>
              <CardInfo>Use Trust Wallet, Metamask or to connect to the app.</CardInfo>
            </RightSection>
          </Card>
          <Card mode={mode}>
            <LestSection>
              <ImageBox>
                <FaPencilRuler fontSize={30} color='white' />
              </ImageBox>
            </LestSection>
            <RightSection>
              <CardTitle>SELECT YOUR QUANTITY</CardTitle>
              <CardInfo>Upload your crypto and set a title, description and price.</CardInfo>
            </RightSection>
          </Card>
          <Card mode={mode}>
            <LestSection>
              <ImageBox>
                <CgBolt fontSize={30} color='white' />
              </ImageBox>
            </LestSection>
            <RightSection>
              <CardTitle>CONFIRM TRANSACTION</CardTitle>
              <CardInfo>Earn by selling your crypto on our marketplace.</CardInfo>
            </RightSection>
          </Card>
        </Columns>
        <Columns>
          <ImageWrap />
        </Columns>
        <Columns>
          <Card mode={mode}>
            <LestSection>
              <ImageBox>
                <FaSatelliteDish fontSize={30} color='white' />
              </ImageBox>
            </LestSection>
            <RightSection>
              <CardTitle>RECEIVE YOUR OWN NFTS</CardTitle>
              <CardInfo>Invest all your crypto at one place on one platform.</CardInfo>
            </RightSection>
          </Card>
          <Card mode={mode}>
            <LestSection>
              <ImageBox>
                <FaChessKnight fontSize={30} color='white' />
              </ImageBox>
            </LestSection>
            <RightSection>
              <CardTitle>TAKE A MARKET TO SELL</CardTitle>
              <CardInfo>Discover, collect the right crypto collections to buy or sell.</CardInfo>
            </RightSection>
          </Card>
          <Card mode={mode}>
            <LestSection>
              <ImageBox>
                <FaBoxes fontSize={30} color='white' />
              </ImageBox>
            </LestSection>
            <RightSection>
              <CardTitle>DRIVE YOUR COLLECTION</CardTitle>
              <CardInfo>We make it easy to Discover, Invest and manage.</CardInfo>
            </RightSection>
          </Card>
        </Columns>
      </Box>
    </Container >
  )
}

export default Benefits;