import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import searchContext from '../Context/searchContext';
import Card from './Card';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
`

const Home = () => {
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    const context = useContext(searchContext);
    const { input, mode } = context;

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
            {data && searchData.map((item) => {
                return <Card key={item.id} items={item} mode={mode} />
            })}
        </Container>
    )
}

export default Home