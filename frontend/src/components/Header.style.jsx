import styled from 'styled-components';
import theme from '../theme'

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 520px;
    position: relative;
`;

export const BannerImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: relative;

    /* filter: opacity(98%); */
    /* filter: grayscale(20%); */
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
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`;

export const SearchContainer = styled.div`
    padding: 0 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
    padding: 5rem;
    border-radius: 10px;
`;

export const CustomInput = styled.div`
    background-color: #fff;
    height: 40px;
    border-radius: 20px;
    padding-left: 10px;
    text-align: start;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex: 2.5;
    border: 1px solid #ccc;
    min-width: 200px;
    overflow: hidden;

    input {
        width: 100%;
        padding: 5px;
        font-size: 16px;
        border: none;
        outline: none;
    }
`;

export const Icon = styled.div`
    color: #7c7c7c;
    margin-right: 10px;
`;

export const CustomSelectWrapper = styled.div`
    position: relative;
    flex: 1;
    /* width: 200px; Ajuste conforme necessário */
`;

export const CustomSelect = styled.div`
    background-color: #fff;
    height: 40px;
    border-radius: 20px;
    padding-left: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    overflow: hidden;
`;

export const OptionsList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 5px 0 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    display: ${({ open }) => (open ? 'block' : 'none')};
    z-index: 10;
`;

export const OptionItem = styled.li`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

