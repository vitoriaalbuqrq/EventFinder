import styled from 'styled-components';
import theme from '../theme';
// import { BsFillMusicPlayerFill } from "react-icons/bs";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    gap: 20px;
    flex-wrap: wrap;

`;

export const CardCategory = styled.div`
    border: 2px solid ${theme.colors.main_color};
    border-radius: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 130px;
    width: 133px;
    color: ${theme.colors.main_color};
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
      transform: scale(1.03);
    }
    
`;

export const Icon = styled.div`
  font-size: 26px;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: center;
`;
