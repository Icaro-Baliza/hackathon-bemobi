import React from 'react'

import Image from 'next/image'
import { SearchBarElement, StyledInput, SubmitButton } from './style'


export default function SearchBar() {
    return(
        <SearchBarElement>
                <StyledInput type="text" name="search" placeholder="Buscar..."/>
                <SubmitButton>
                    <Image
                        alt="Icone de pesquisa"
                        height={16}
                        src="/lupa.svg"
                        width={16}
                        />
                </SubmitButton>

        </SearchBarElement>
    )
}