import styled from 'styled-components'


export const SearchBarElement = styled.div`
    display: flex;
    align-items: center;
    width: 30%; 
`

export const StyledInput = styled.input`
    background-color: transparent;
    width: 100%;
    padding: 10px 40px 10px 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    font-size: 16px;
    color: white;

    &::placeholder{ 
        color: white;
        opacity: 50%;
    }


`

export const SubmitButton = styled.button`
    margin-left: -30px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
`