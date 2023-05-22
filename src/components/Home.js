import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CgSearch } from "react-icons/cg";
import searchContext from '../Context/searchContext';
import { mobile } from '../responsive';
import Card from './Card';
import { motion } from 'framer-motion'
import coverImg from '../Images/404.jpg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0px;

    ${mobile({
    padding: '34px 0px',
})}
`

const Box = styled.div`
    width: 80%;
    height: 71vh;
    border: 1px solid ${props => !props.mode ? 'black' : '#494451'};
    border-radius: 0px 0px 20px 20px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0.5vw;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #7775;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: #777;
    }

    ${mobile({
    width: '95%',
})}
`
const ImageWrap = styled.div`
    width: 80%;
    height: 71vh;
    background-color: #fff;
    border: 1px solid ${props => !props.mode ? 'black' : '#494451'};
    border-radius: 20px 20px 20px 20px;
    background-image: url(${coverImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`

const Heading = styled.h1`
    margin: 0;
    text-transform: uppercase;
    font-weight: 700;
    color: ${props => !props.mode ? '#242526' : 'white'};

    ${mobile({
    textAlign: 'center',
    fontSize: '24px'
    })}
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

const TitleBar = styled.div`
    margin: auto;
    padding: 42px 0px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 26.5rem; */

    ${mobile({
    flexDirection: 'column',
    gap: '14px',
    padding: '18px 0px'
    })}
`

const SearchBar = styled.div`
    margin: 0px 15px;
    padding: 10px 35px;
    border-radius: 50px;
    background-color: #ebedf0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobile({
    width: '100%',
    margin: '10px 0px',
    padding: '10px 30px',
})}
`
const Input = styled.input`
    outline: none;
    border: none;
    width: 25vw;
    background: none;
    font-size: 15px;
    font-weight: 200;

    ${mobile({
    flex: 1,
    width: '100%',
    fontSize: '16px'
})}
`

const Home = () => {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    const context = useContext(searchContext);
    const { input, mode, setMainData, handleInput, setDataLoaded, dataLoaded } = context;

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
            try {
                const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false');
                setData(res.data);
                setMainData(res.data);
                setDataLoaded(true);
            } catch (error) {
                setDataLoaded(false);
            }
        }
        makeReq();
    }, []);

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
        <Container id='market'>
            <TitleBar>
                <Heading mode={mode}>Today's Crypto Prices</Heading>
                {dataLoaded && (<SearchBar>
                    <Input placeholder='Seacrh' onChange={(e) => handleInput(e.target.value)} />
                    <CgSearch style={{ fontSize: '18px' }} />
                </SearchBar>)}
            </TitleBar>
            {dataLoaded && (<Legend mode={mode}
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
            </Legend>)}
            {
                dataLoaded ? (
                    <Box mode={mode}>
                        {data && searchData.map((item, i) => {
                            return <Card i={i} key={item.id} items={item} mode={mode} />
                        })}
                    </Box>
                ) : (
                    <ImageWrap />
                )
            }
        </Container>
    )
}

export default Home