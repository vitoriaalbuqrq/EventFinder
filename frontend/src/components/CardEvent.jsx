import styled from 'styled-components';
import defaultImage from '../assets/defaultEvent.png'
import { FaLocationDot } from "react-icons/fa6";
import theme from '../theme';


const CardWrapper = styled.div`
    border-radius: 20px;
    padding: 5px;
    min-width: 310px;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
    }
    
`;
const CardImg = styled.div`
    position: relative;
    height: 200px;
    width: 100%;
    border: 1px solid ${theme.colors.main_color};
    border-radius: 20px 20px 0 0 ;
`;

const ImgCard = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;

`;

const ContainerDate = styled.div`
    position: absolute;
    top: 0;
    left: 20px;
    background-color: ${theme.colors.main_color_rgba};
    padding: 5px;
    border-radius: 0 0 15px 15px;
    text-align: center;
`
const DateText = styled.p`
    color: #fff;
    font-size: 15px;
    display: flex;
    min-width: 95px;
    padding-block: 8px;
    flex-direction: column;
    line-height: 28px;
    
    span {
        font-size: 36px;
        font-weight: bold;
    }
`

const CardInfo = styled.div`
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

const CardEvent = ({ event, onClick }) => (
    <CardWrapper onClick={onClick}>
        <CardImg>
            <ImgCard
                src={event.imgEvent || defaultImage}
                alt='event'
            />
            <ContainerDate>
                <DateText>
                    <span>{new Date(event.startDate).getDate()}</span>
                    {new Date(event.startDate).toLocaleString('default', { month: 'long' })}
                </DateText>
            </ContainerDate>
        </CardImg>
        <CardInfo>
            <p>{event.name}</p>
            <div>
                <FaLocationDot />
                <small>{event.city}</small>
            </div>
        </CardInfo>
    </CardWrapper>
);
export default CardEvent

