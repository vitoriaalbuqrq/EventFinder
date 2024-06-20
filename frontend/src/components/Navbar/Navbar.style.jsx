import styled from 'styled-components';
import theme from '../../theme'

export const NavbarContainer = styled.nav`
    width: 100%;
    background-color: ${theme.colors.secondary};
    padding: 1.2em 1.5em;

`;

export const NavbarList = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    `;

export const LeftList = styled.div`

`

export const RightList = styled.div`
    display: flex;
    justify-content: end;
    gap: 20px;
`
