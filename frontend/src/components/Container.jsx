import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #eaeaf5;
`
export const ContainerSearch = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-inline:50px;
    padding-top: 2rem;
    padding-bottom: 2rem;
    gap: 15px;
    justify-content: center;
    
 `
export const Title = styled.h2`
    padding-top: 2rem;
    text-align: center;
    color: ${theme.colors.secondary};

`

const Container = (props) => {
    return (
        <ContainerSearch>
            {props.children}
        </ContainerSearch>
    )
}

export default Container