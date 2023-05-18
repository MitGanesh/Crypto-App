import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import searchContext from '../Context/searchContext';
import { mobile } from '../responsive';
import Card from './Card';
import { motion } from 'framer-motion'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0px;
`

const Box = styled.div`
    width: 80%;
    height: 80vh;
    box-shadow: rgba(255, 255, 255, 0.05) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    overflow-y: scroll;

    ${mobile({
    width: '95%',
    })}
`
const Heading = styled.h1`
    padding: 32px 0px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${props => !props.mode ? '#242526' : 'white'};
`
const Legend = styled(motion.div)`
    padding: 24px 0px;
    margin: auto;
    display: flex;
    width: 80%;
    font-size: 18px;
    font-weight: 500;
    border-radius: 20px 20px 0px 0px;
    color: ${props => props.mode ? '#242526' : 'white'};
    background: ${props => props.mode ? '#ebedf0' : '#242526'};

    ${mobile({
    width: '95%',
    fontSize: '14px',
    padding: '24px 10px',

})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Title = styled.div`
`
const Center = styled.div`
    flex: 3;
    display: flex;
    justify-content: space-between;

    ${mobile({
    justifyContent: 'space-around',
})}
`
const Right = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    ${mobile({
    display: 'none',
})}
`

const Home = () => {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    const context = useContext(searchContext);
    const { input, mode, setMainData } = context;

    const legendTransition = {
        start: {
            x: 200,
        },
        mid: {
            x: 0,
            transition: {
                duration: 0.03,
            }
        }
    }

    useEffect(() => {
        const makeReq = async () => {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false');
            setData(res.data);
            setMainData(res.data);
        }
        makeReq();
    }, [])

    useEffect(() => {
        const newData = () => {
            if (input) {
                const list = data.filter(ele => {
                    const nameMatch = ele?.name.toLowerCase().includes(input.toLowerCase());
                    const symbolMatch = ele?.symbol.toLowerCase().includes(input.toLowerCase());
                    if (nameMatch || symbolMatch) {
                        return ele;
                    }
                    return null;
                });
                setSearchData(list);
            } else {
                setSearchData(data);
            }
        }
        newData();
    }, [data, input]);

    return (
        <Container>
            <Heading mode={mode}>Today's Crypto Prices</Heading>
            <Legend mode={mode}
                variants={legendTransition}
                initial="start"
                animate="mid"
            >
                <Left>COIN</Left>
                <Center>
                    <Title>NAME</Title>
                    <Title>CHNAGE</Title>
                    <Title>CURRENT PRICE</Title>
                </Center>
                <Right>MARKET CAP.</Right>
            </Legend>
            <Box>
                {data && searchData.map((item, i) => {
                    return <Card i={i} key={item.id} items={item} mode={mode} />
                })}
            </Box>
        </Container>
    )
}

export default Home