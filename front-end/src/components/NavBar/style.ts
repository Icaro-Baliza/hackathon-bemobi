import styled from 'styled-components'
import Link from 'next/link'


export const NavBarElement = styled.div`
    background-color: #121F66;
    width: 100vw;
    height: 100px;
    position: fixed;
    z-index: 10;
    inset: 0 0 0 0;
    border-bottom: 3px solid rgba(0, 0, 0, 0.05);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    background-color: transparent;
    border: none;
    gap: 70px;
`

export const StyledButton = styled.button`
    border: none;
    background-color: transparent;
    &:hover{
        cursor: pointer;
    }
`
