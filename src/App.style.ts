import styled, { css, keyframes } from 'styled-components'

interface IProps {
    jumping?: boolean
    poroSprite?: string
}

export const Background = styled.div`
    display: flex;
    width: 600px;
    height: 200px;
    border: 1px solid black;
    align-items: flex-end;
    position: relative;
`

const jump = keyframes`
    0% { bottom: 0px; } 
    50% { bottom: 120px; }
    100% { bottom: 0px; }
`

export const Dino = styled.div<IProps>`
    width: 50px;
    height: 49px;
    background-image: ${props => props.poroSprite};
    background-size: 50px;
    position: absolute;
    bottom: 0;
    animation: ${props =>
        props.jumping &&
        css`
            ${jump} 0.4s linear
        `
    };
`

const move = keyframes`
    0%{ left: 558px; }
    100%{ left: -50px; }
`

export const Cactus = styled.div<IProps>`
    width: 43px;
    height: 78px;
    position: relative;
    left: 558px;
    right: 50px;
    background-image: url('./src/assets/cactus.png');
    animation: ${move} 0.8s infinite linear
`