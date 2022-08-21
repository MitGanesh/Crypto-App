import React, { useContext } from 'react';
import styled from 'styled-components';
import { CgSun, CgMoon, CgSearch } from "react-icons/cg";
import searchContext from '../Context/searchContext';
import { mobile } from '../responsive';

const Container = styled.div`
    margin: 0;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    background: ${props => props.mode ? '#242526' : 'white'};   
    box-shadow: 0 2px 17px rgb(0 0 0 / 7%);

    ${mobile({
        padding: '5px 10px',
        width: '100%',
    })}
`
const Left = styled.div`
    flex: 1;
    display: flex;

    ${mobile({
        display: 'none',
    })}
`
const Center = styled.div`
    flex: 2;
    text-align: center;
    font-size: 24px;
    font-family: 'Major Mono Display', monospace;

    ${mobile({
        flex: 0,
    })}

`
const Right = styled.div`
    flex: 1;
    text-align: right;
    display: flex;

    ${mobile({
        flex: 0,
    })}
`
const Logo = styled.span`
    cursor: pointer;
    color: ${props => props.mode ? 'white' : 'black'};

    ${mobile({
        merginLeft: '0px',
        fontSize: '22px',
    })}
`
const Heading = styled.p`
    margin-right: 10px;
    font-size: 16px;
    cursor: pointer;
    font-weight: ${props => props.bold};
    display: flex;
    align-items: center;
    margin-bottom: 0;
    color: ${props => props.mode ? 'white' : 'black'};
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
const SearchBar = styled.div`
    flex: 4;
    margin: 0px 15px;
    padding: 5px 15px;
    border-radius: 50px;
    background-color: #ebedf0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${mobile({
        margin: '0px 8px',
        padding: '0px 10px',
    })}
`
const Input = styled.input`
    outline: none;
    border: none;
    background: none;

    ${mobile({
        flex: 1,
        width: '150px',
    })}
`
const Themes = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
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
                <Heading mode={mode} bold={600}>HOME</Heading>
                <Heading mode={mode}>ABOUT</Heading>
                <Heading mode={mode}>CONTACT</Heading>
            </Left>
            <Center>
                <Logo mode={mode}>
                    cRypTo
                </Logo>
            </Center>
            <Right>
                <SearchBar>
                    <Input placeholder='Seacrh' onChange={(e) => handleInput(e.target.value)} />
                    <CgSearch style={{ fontSize: '18px' }} />
                </SearchBar>
                <Themes>
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