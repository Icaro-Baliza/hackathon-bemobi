import React from 'react'

import { SideBarElement, SideBarOver, StyledLink, StyledNav} from './style'

export default function SideBar() {
    return(
        <SideBarElement>
            <SideBarOver>
                <StyledNav>
                        <StyledLink href="/"><span>Globo</span></StyledLink>

                    
                        <StyledLink href="/geography"><span>Globo</span></StyledLink>

                    
                        <StyledLink href="#"><span>Globo</span></StyledLink>

                    
                        <StyledLink href="#"><span>Globo</span></StyledLink>
                </StyledNav>
            </SideBarOver>

        </SideBarElement>
    )
}