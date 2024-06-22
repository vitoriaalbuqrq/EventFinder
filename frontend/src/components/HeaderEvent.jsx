import styled from "styled-components"
import theme from '../theme'

const BASE_URL = 'http://localhost:3000';

const Header = styled.header`
  position: relative;
  width: 100%;
  height: 350px;
  text-align: center;
  margin-bottom: 4rem;
`;

const ImgHeader = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.96;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(64, 75, 227, 0.4), rgba(64, 75, 227, 0.1));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const EventName = styled.h1`
  margin: 0;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

`;

const OrganizerName = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  font-weight: normal;
`;

const ContainerDataTime = styled.div`
  padding: 20px 40px;
  position: absolute;
  background: ${theme.colors.main_color};
  text-align: center;
  color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 30px;
  top: 100%; 
  left: 50%;
  transform: translate(-50%, -50%); 
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  z-index: 1;
`;

const EventDate = styled.p`
  font-size: 22px;
  font-weight: bold;
`
const Time = styled.p`
  font-weight: 500;
`
const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', options);
};

const HeaderEvent = ({ img, name, organizerName, startDate, startTime, endTime }) => {
  const imageUrl = img ? `${BASE_URL}${img}` : defaultImage;
  return (
    <Header>
      <ImgHeader src={imageUrl} alt='imagem evento' />
      <Overlay>
        <EventName>{name}</EventName>
        <OrganizerName>By {organizerName}</OrganizerName>
      </Overlay>
      <ContainerDataTime>
        <EventDate>{formatDate(startDate)} </EventDate>
        <span>|</span>
        <Time>Das {startTime} às {endTime} hrs</Time>
      </ContainerDataTime>
    </Header>
  );
}

export default HeaderEvent;
