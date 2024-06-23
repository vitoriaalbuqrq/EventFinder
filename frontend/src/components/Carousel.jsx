import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import eventFetch from "../axios/config";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../theme';
import CardEvent from './CardEvent';

const CustomNavigation = styled.div`
    color: ${theme.colors.main_color};
    `;

const CardContainer = styled.div`
    padding-inline: 70px;
    text-align: center;
`;

const SectionTitle = styled.h1`
    color: ${theme.colors.secondary};
    text-align: center;
    margin-bottom: 1rem;
`

const Carousel = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await eventFetch.get("/events");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [])

  const handleCardClick = (event) => {
    navigate(`/event/${event._id}`, {state: {event}});
  }

  return (
    <CardContainer>
      <SectionTitle>Eventos Recentes</SectionTitle>
      <Swiper
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        // centeredSlides
        spaceBetween={15}
      >
        {data.map((item) => (
          <SwiperSlide key={item._id}>
            <CardEvent event={item} onClick={() => handleCardClick(item)} />
          </SwiperSlide>
        ))}

        <CustomNavigation className="swiper-button-next"></CustomNavigation>
        <CustomNavigation className="swiper-button-prev"></CustomNavigation>
      </Swiper>
    </CardContainer>

  )
}

export default Carousel
