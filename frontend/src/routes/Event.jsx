import React from 'react'
import HeaderEvent from '../components/HeaderEvent'
import { useLocation } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import styled from 'styled-components'
import theme from '../theme'

const SectionEvent = styled.section`
  padding: 2rem 8rem;
  display: flex;
  gap: 7rem;

  h2{
    margin-bottom: 20px;
    color: ${theme.colors.secondary};
  }
`
const LeftSection = styled.section`
  flex: 2;
`
const RightSection = styled.div`
  flex: 1;

  div{
    display: flex;
    align-items: center;
    gap: 10px;
    text-align: center;
  }
  .icon{
    font-size: 22px;
    color: #535353
  }

`

const Event = () => {
  const location = useLocation();
  const { event } = location.state || {};

  if (!event) {
    return <div>Evento não encontrado</div>
  }

  return (
    <>
      <HeaderEvent
        img={event.imgEvent}
        name={event.name}
        organizerName={event.organizerName}
        startDate={event.startDate}
        startTime={event.startTime}
        endTime={event.endTime}
      >
      </HeaderEvent>

      <SectionEvent>
        <LeftSection>
          <h2>Descrição</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus error enim repudiandae, tenetur illo voluptas omnis, ab pariatur deleniti iure beatae saepe eligendi eaque. Laudantium itaque possimus aut at quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus error enim repudiandae, tenetur illo voluptas omnis, ab pariatur deleniti iure beatae saepe eligendi eaque. Laudantium itaque possimus aut at quas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus error enim repudiandae, tenetur illo voluptas omnis, ab pariatur deleniti iure beatae saepe eligendi eaque. Laudantium itaque possimus aut at quas.</p>
        </LeftSection>
        <RightSection>
          <h2>Entre em Contato</h2>
          <div>
            <MdEmail className='icon' />
            <p>eventfinder@gmail.com</p>
          </div>
          <div>
            <FaPhoneAlt className='icon' />
            <p>(99) 99999-9999</p>
          </div>
        </RightSection>
      </SectionEvent>

      <SectionEvent>
        <RightSection>
          <h2>Localização</h2>
          <div>
            <FaLocationDot className='icon'/>
            <p>{event.address} - {event.state}</p>
          </div>
        </RightSection>
      </SectionEvent>

    </>
  )
}

export default Event