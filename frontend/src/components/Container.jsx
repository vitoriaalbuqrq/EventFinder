import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

export const ContainerSearch = styled.div`
    display: flex;
    width: 100%;
    padding-inline:60px;
    padding-top: 2rem;
    gap: 20px;
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