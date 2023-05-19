import React, { useContext } from 'react';
import styled from 'styled-components';
import { CgSun, CgMoon } from "react-icons/cg";
import searchContext from '../Context/searchContext';
import { mobile } from '../responsive';
import { motion } from 'framer-motion'

const Container = styled.div`
    margin: 0;
    padding: 10px 140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 85px;
    background: ${props => props.mode ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.5)'};   
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 17px rgb(0 0 0 / 7%);
    z-index: 10;

    ${mobile({
    padding: '5px 10px',
    width: '100%',
})}
`
const Left = styled.div`
    flex: 1;
    font-size: 30px;
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    /* font-family: 'Major Mono Display', monospace; */
    background: linear-gradient(200deg, #ff00cc, #3333ff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;

    ${mobile({
    flex: 0,
})}
`
const Center = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    gap: 14px;

    ${mobile({
    display: 'none',
})}

`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: end;

    ${mobile({
    flex: 0,
})}
`
const Logo = styled.span`
    cursor: pointer;
    color: ${props => props.mode ? 'white' : 'black'};

    ${mobile({
    merginLeft: '0px',
    fontSize: '28px',
})}
`
const Heading = styled.a`
    margin-right: 10px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    font-weight: ${props => props.bold};
    display: flex;
    align-items: center;
    margin-bottom: 0;
    color: ${props => props.mode ? 'white' : 'black'};

    &:hover{
    color: #2600fc;
    }
`
const Mod = styled.span`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.mode ? 'white' : 'black'};

    &:hover {
        background-color: #ebedf0;
        color: black;
    }
`

const Themes = styled(motion.div)`
    display: flex;
`

const Navbar = () => {

    const context = useContext(searchContext);
    const { handleInput, mode, setMode } = context;

    const handleMode = () => {
        setMode(!mode)
        if (mode) {
            document.body.style.background = 'white';
        } else {
            document.body.style.background = '#1b1b1d';
        }
    }

    return (
        <Container className='fixed-top' mode={mode}>
            <Left>
                <Logo mode={mode}>
                    CRYPTO
                </Logo>
            </Left>
            <Center>
                <Heading href='/#' bold={500} mode={mode}>HOME</Heading>
                <Heading href='#market' bold={500} mode={mode}>MARKET</Heading>
                <Heading href='#why-crypto' bold={500} mode={mode}>WHY US</Heading>
                <Heading href='#join' bold={500} mode={mode}>JOIN</Heading>
            </Center>
            <Right>
                <Themes
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 2
                    }}
                >
                    {!mode ? (

                        <Mod mode={mode} onClick={handleMode}>
                            <CgSun style={{ fontSize: '22px' }} />
                        </Mod>
                    ) : (

                        <Mod mode={mode} onClick={handleMode} >
                            <CgMoon style={{ fontSize: '22px' }} />
                        </Mod>
                    )}
                </Themes>
            </Right>
        </Container>
    )
}

export default Navbar