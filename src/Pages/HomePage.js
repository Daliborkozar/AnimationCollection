import React from 'react'
import styled from 'styled-components'
import { AnimatedLink } from '../components/AnimatedLink'
import { HoverAnim1 } from '../components/HoverAnim1'
import Canvas from '../components/Canvas'

const Wrapper = styled('div')`
    margin-top: 30px;
    margin-left: 40px;
`

const HomePage = () => {
    return (
        <Wrapper>
            <h1>Text</h1>
            <AnimatedLink />
            <h1>Buttons</h1>
            <HoverAnim1/>
            <h1><Canvas/></h1>
        </Wrapper>
    )
}

export default HomePage
