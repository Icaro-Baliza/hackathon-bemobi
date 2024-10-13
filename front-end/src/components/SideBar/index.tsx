import React from 'react'
import Image from 'next/image'
import { SideBarElement, SideBarOver, StyledLink, StyledNav} from './style'

export default function SideBar() {
    return(
        <SideBarElement>
            <SideBarOver>
                <StyledNav>
                        <StyledLink href="/">
                            <Image
                            alt="Home"
                            height={40}
                            width={40}
                            src="/home.svg"
                            />
                        </StyledLink>

                    
                        <StyledLink href="/geography">                            <Image
                            alt="Dados"
                            height={40}
                            width={40}
                            src="/bar-chart.svg"
                            /></StyledLink>

                    
                        <StyledLink href="/chatbot">                            <Image
                            alt="Chatbot"
                            height={40}
                            width={40}
                            src="/chatbot.svg"
                            /></StyledLink>

                    
                        <StyledLink href="#">                            <Image
                            alt="Colaboration"
                            height={40}
                            width={40}
                            src="/people.svg"
                            /></StyledLink>
                </StyledNav>
                <StyledLink href="#">                            <Image
                            alt="Sair"
                            height={30}
                            width={30}
                            src="/exit.svg"
                            /></StyledLink>
            </SideBarOver>

        </SideBarElement>
    )
}