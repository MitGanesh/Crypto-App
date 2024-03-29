import React from 'react';
import styled from 'styled-components';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { mobile } from '../responsive';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
    margin: auto;
    padding-top: 25px;
    width: 100%;

    ${mobile({
    width: '100%',
})}
`

const Container = styled.div`
    width: 100%;
    padding: 12px 8px;
    display: flex;
    height: 50px;
    align-items: center;

    ${mobile({
    padding: '12px 12px'
})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

    ${mobile({
    flex: 1,
})}
`
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;

    ${mobile({
    fontSize: '12px',
})}
`
const Name = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 500;
    color: ${props => props.mode ? 'white' : 'black'};

    ${mobile({
    fontSize: '14px',
})}
`
const Symbol = styled.div`
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    color: #d0d2d5;

    ${mobile({
    fontSize: '12px',
})}
`

const CurrentValue = styled.div`
    font-family: 'Lato', sans-serif;
    text-align: right;
    color: ${props => props.mode ? 'white' : 'black'};

    ${mobile({
    fontSize: '14px',
})}
`
const Growth = styled.div`
    font-family: 'Lato', sans-serif;
    display: flex;
    text-align: left;
    align-items: center;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
    margin: 0 auto;

    ${mobile({
    width: '30px',
    height: '30px',
})}
`
const Center = styled.div`
    flex: 3;
    display: flex;
    justify-content: space-between;

    ${mobile({
    flex: 4,
    justifyContent: 'space-around',

})}
`
const Right = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.mode ? 'white' : 'black'};

    ${mobile({
    display: 'none',
})}
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

    const cardTransition = {
        start: {
            x: -200,
            opacity: 0,
        },
        mid: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.05 * props.i,
                duration: 0.3,
            }
        }
    }

    return (
        <Wrapper
            variants={cardTransition}
            initial="start"
            animate="mid"
        >
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
                        {/* <Name mode={props.mode}>{name}</Name> */}
                        {current_price - ((high_24h + low_24h) / 2) > 0 ? (
                            <Growth style={{ color: '#47c87c' }} ><BsFillCaretUpFill />{variation}%</Growth>
                        ) : (
                            <Growth style={{ color: '#ea3943' }}><BsFillCaretDownFill />{variation}%</Growth>
                        )}
                    </Wrap>
                    <Wrap>
                        <CurrentValue mode={props.mode}>{currencyFormat(current_price)}</CurrentValue>
                    </Wrap>
                </Center>
                <Right mode={props.mode}>
                    {currencyFormat(market_cap)}
                </Right>
            </Container>
            {/* <HR/> */}
            <HR style={{ width: '90%', margin: '20px auto',}} />
        </Wrapper>
    )
}

export default Card