import React from 'react';
import styled from 'styled-components';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

const Wrapper = styled.div`
    width: 60%;
`

const Container = styled.div`
    width: 100%;
    padding: 12px 8px;
    display: flex;
    height: 50px;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 500;
    color: ${props => props.mode ? 'white' : 'black'};
`
const Symbol = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    color: #d0d2d5;
`

const CurrentValue = styled.div`
    font-family: 'Lato', sans-serif;
    color: ${props => props.mode ? 'white' : 'black'};
`
const Growth = styled.div`
    font-family: 'Lato', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 auto;
`
const Center = styled.div`
    flex: 3;
    display: flex;
    justify-content: space-between;
`
const Right = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.mode ? 'white' : 'black'};
`
const HR = styled.hr`
    border: 1px solid #dadce0;
`

const Card = (props) => {

    const { image, name, symbol, current_price, market_cap, low_24h, high_24h } = props.items;
    const variation = (((current_price - (high_24h + low_24h) / 2) / ((high_24h + low_24h) / 2)) * 100).toFixed(2);

    const currencyFormat = (num) => {
        return '₹' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return (
        <Wrapper>
            <Container>
                <Left>
                    <Image src={image} />
                </Left>
                <Center>
                    <Wrap>
                        <Name mode={props.mode}>{name}</Name>
                        <Symbol>{symbol?.toUpperCase()}</Symbol>
                    </Wrap>
                    <Wrap>
                        <CurrentValue mode={props.mode}>{currencyFormat(current_price)}</CurrentValue>
                        {current_price - (high_24h + low_24h) / 2 > 0 ? (
                            <Growth style={{ color: '#47c87c' }} ><BsFillCaretUpFill />{variation}%</Growth>
                        ) : (
                            <Growth style={{ color: '#ea3943' }}><BsFillCaretDownFill />{variation}%</Growth>
                        )}
                    </Wrap>
                </Center>
                <Right mode={props.mode}>
                    {currencyFormat(market_cap)}
                </Right>
            </Container>
            <HR />
        </Wrapper>
    )
}

export default Card