import React from 'react'
import { NavBarElement, ButtonContainer, StyledButton } from './style'
import Image from 'next/image'
import SearchBar from '../SearchBar'


export default function NavBar() {
    return(
        <NavBarElement>
            <Image
                alt="logo da empresa"
                height={50}
                width={146}
                src="/logoProvisoria.svg"
            />
            <SearchBar/>
            <ButtonContainer>
                    <StyledButton>
                    <Image
                        alt="Icone de pesquisa"
                        height={24}
                        src="/config.svg"
                        width={24}
                        />
                    </StyledButton>
                    <StyledButton>
                    <Image
                        alt="Icone de pesquisa"
                        height={24}
                        src="/notification.svg"
                        width={24}
                        />
                    </StyledButton>
                    <StyledButton>
                    <Image
                        alt="Icone de pesquisa"
                        height={24}
                        src="/help.svg"
                        width={24}
                        />
                    </StyledButton>
                </ButtonContainer>
        </NavBarElement>
    )
}