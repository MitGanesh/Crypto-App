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
    margin-top: 100px;
`
const Legend = styled(motion.div)`
    padding: 24px 0px;
    display: flex;
    width: 60%;
    font-size: 18px;
    font-weight: 500;
    border-radius: 20px 20px 0px 0px;
    color: ${props => props.mode ? '#242526' : 'white'};
    background: ${props => props.mode ? '#ebedf0' : '#242526'};
    margin-bottom: 25px;

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
const Title = styled.div``
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
    const { input, mode } = context;

    const legendTransition = {
        start: {
            x: 200,
        },
        mid: {
            x: 0,
            transition: {
                duration:0.03,
            }
        }
    }

    useEffect(() => {
        const makeReq = async () => {
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false');

            // console.log(res.data);
            setData(res.data);
        }
        makeReq();
    }, [])

    useEffect(() => {
        const newData = () => {
            if (input) {
                const list = data.filter(ele => ele.name.toLowerCase().includes(input));
                setSearchData(list);
                // console.log(searchData);
            } else {
                setSearchData(data);
            }
        }
        newData();

    }, [data, input]);



    return (
        <Container>
            <Legend mode={mode}
                variants={legendTransition}
                initial="start"
                animate="mid"
            >
                <Left>SYM.</Left>
                <Center>
                    <Title>NAME</Title>
                    <Title>CURRENT PRICE</Title>
                </Center>
                <Right>MARKET CAP.</Right>
            </Legend>
            {data && searchData.map((item,i) => {
                return <Card i={i} key={item.id} items={item} mode={mode} />
            })}
        </Container>
    )
}

export default Home