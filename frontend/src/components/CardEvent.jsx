import styled from 'styled-components';
import defaultImage from '../assets/defaultEvent.png'
import { FaLocationDot } from "react-icons/fa6";
import theme from '../theme';

const BASE_URL = 'http://localhost:3000';

const CardWrapper = styled.div`
    border-radius: 20px;
    padding: 5px;
    width: 380px;
    /* min-width: 310px; */
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      transform: scale(1.01);
    }
`;

const CardMain = styled.div`
    
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
    border-left: 1px solid ${theme.colors.main_color};
    border-right: 1px solid ${theme.colors.main_color};
    border-bottom: 1px solid ${theme.colors.main_color};
    border-radius: ${(props) => (props.noborderradius ? 'none' : '0 0 20px 20px')};
    background-color: ${theme.colors.ligth_gray};
    div{
        display: flex;
        align-items: center;
        gap: 5px;
        color: #5a5a5a;
    }

`

const CardEvent = ({ event, onClick, noborderradius, children }) => {
    // Cria a URL completa para a imagem do evento
    const imageUrl = event.imgEvent ? `${BASE_URL}${event.imgEvent}` : defaultImage;
    const noborderradiusString = noborderradius ? 'true' : undefined;

    return (
        <CardWrapper>
            <CardMain onClick={onClick}>
                <CardImg>
                    <ImgCard
                        src={imageUrl}
                        alt='event'
                    />
                    <ContainerDate>
                        <DateText>
                            <span>{new Date(event.startDate).getDate()}</span>
                            {new Date(event.startDate).toLocaleString('default', { month: 'long' })}
                        </DateText>
                    </ContainerDate>
                </CardImg>
                <CardInfo noborderradius={noborderradiusString}>
                    <p>{event.name}</p>
                    <div>
                        <FaLocationDot />
                        <small>{event.isOnlineEvent ? `${event.platform}` : `${event.city}`}</small>
                    </div>
                </CardInfo>
            </CardMain>
            {children}
        </CardWrapper>
    );
};

export default CardEvent;

