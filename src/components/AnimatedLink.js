import React from 'react'
import styled from 'styled-components'


const LinkStyle = styled.a`
    background: linear-gradient(to bottom, #67B7D1 0%, #67B7D1 100%);
    background-position: 0 100%;
    background-repeat: repeat-x;
    background-size: 4px 4px;
    text-decoration: none;
    transition: background-size .3s;
        &:hover { 
            background-size: 4px 35px;
        };
    cursor: pointer;
`;

const Pstyle = styled('p')`
    font-size: 20px;
`
   

const AnimatedLink = () => {
    return (
        <>
        <Pstyle>Lorem ipsum dolor <LinkStyle>nisi ut aliquip</LinkStyle> perspiciatis</Pstyle>
        </>
    )
}

export { AnimatedLink }
