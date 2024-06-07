import styled from 'styled-components';
import theme from '../theme';

export const CustomNavigation = styled.div`
    color: ${theme.colors.main_color};
`;

export const CardContainer = styled.div`
    padding-inline: 60px;
    text-align: center;
`;

export const CardWrapper = styled.div`
    border-radius: 20px;
    padding: 5px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
    }
    
`;
export const CardImg = styled.div`
    position: relative;
    width: auto; 
    height: 200px;    
`;

export const ImgCard = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;

`;

export const ContainerDate = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
    background-color: ${theme.colors.main_color_rgba};
    padding: 5px;
    border-radius: 0 0 15px 15px;
`
export const DateText = styled.p`
    color: ${theme.colors.primary};
    font-size: 18px;
    display: flex;
    padding-inline: 12px;
    padding-block: 8px;
    flex-direction: column;
    line-height: 28px;
    
    span {
        font-size: 36px;
        font-weight: bold;
    }
`

export const CardInfo = styled.div`
    text-align: start;
    padding-inline: 20px;
    padding-block: 15px;
    color: ${theme.colors.main_color};
    border: 1px solid ${theme.colors.main_color};
    border-radius: 0 0 20px 20px;

    div{
        display: flex;
        align-items: center;
        gap: 5px;
        color: #5a5a5a;
    }

`

