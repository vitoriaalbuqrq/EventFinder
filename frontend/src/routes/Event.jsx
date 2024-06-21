import React, { useEffect, useState } from 'react';
import HeaderEvent from '../components/HeaderEvent';
import { useLocation, useParams } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import styled from 'styled-components';
import theme from '../theme';
import defaultImage from '../assets/defaultEvent.png';
import eventFetch from '../axios/config'; // Importe seu cliente axios configurado

const SectionEvent = styled.section`
  padding: 2rem 8rem;
  display: flex;
  gap: 7rem;

  h2 {
    margin-bottom: 20px;
    color: ${theme.colors.secondary};
  }
`;

const LeftSection = styled.section`
  flex: 2;
`;

const RightSection = styled.div`
  flex: 1;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
  
  .icon {
    font-size: 22px;
    color: #535353;
  }
`;

const Event = () => {
  const { id } = useParams(); // Obtém o ID da rota
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await eventFetch.get(`/event/${id}`); // Faz a requisição GET usando o ID
        setEvent(response.data); // Atualiza o estado do evento com os dados recebidos
      } catch (error) {
        console.error('Erro ao buscar detalhes do evento:', error);
      }
    };

    fetchEvent();
  }, [id]); // Executa novamente o fetch quando o ID muda

  if (!event) {
    return <div>Carregando...</div>; // Pode ser interessante mostrar um indicador de carregamento
  }

  return (
    <>
      <HeaderEvent
        img={event.imgEvent || defaultImage}
        name={event.name}
        organizerName={event.organizerName}
        startDate={event.startDate}
        startTime={event.startTime}
        endTime={event.endTime}
      />

      <SectionEvent>
        <LeftSection>
          <h2>Descrição</h2>
          <p>{event.description}</p>
        </LeftSection>
        <RightSection>
          <h2>Entre em Contato</h2>
          <div>
            <MdEmail className='icon' />
            <p>{event.contactEmail}</p>
          </div>
          <div>
            <FaPhoneAlt className='icon' />
            <p>{event.telephone}</p>
          </div>
        </RightSection>
      </SectionEvent>

      <SectionEvent>
        <RightSection>
          <h2>Localização</h2>
          <div>
            <FaLocationDot className='icon'/>
            <p>{event.street}, nº {event.number}, {event.city}-{event.state}</p>
          </div>
        </RightSection>
      </SectionEvent>
    </>
  );
};

export default Event;
