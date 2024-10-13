
import styled from 'styled-components'
import Link from 'next/link'

export const SideBarElement = styled.div`
`
export const SideBarOver = styled.aside`
    position: fixed;
    z-index: 10;
    inset: 100px 0 0 0;
    width: 10rem;
    border-right: 3px solid rgba(0, 0, 0, 0.05);
    background-color: white;
    padding-bottom: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const StyledNav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    padding: 2rem 5rem;

`

export const StyledLink = styled(Link)`
    color: black;
`

export const SideBarMobile = styled.div`
`