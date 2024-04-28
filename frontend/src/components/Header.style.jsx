import styled from 'styled-components';
import theme from '../theme';

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 520px;
    position: relative;
`;

export const BannerImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    filter: grayscale(20%);
`;

export const HeaderContainer = styled.div`
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    min-width: 75%;
`;

export const SloganHeader = styled.h1`
    font-weight: bold;
    margin: 0 auto;
    color: #fff;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
`;

const inputSearch = `
    background-color: ${theme.colors.ligth_gray};
    height: 40px;
    border-radius: 20px;
    border: none;
    outline: none;
`;

export const CustomInput = styled.input`
    ${inputSearch};
    width: 50%;
    padding: 10px;
    font-size: 16px;
`;

export const CustomSelect = styled.select`
    ${inputSearch};
    width: 20%;
`;






