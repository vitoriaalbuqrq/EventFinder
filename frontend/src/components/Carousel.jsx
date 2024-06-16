import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLocationDot } from "react-icons/fa6";
import { SectionTitle, ImgCard, CardContainer, CardImg, ContainerDate, DateText, CardInfo, CardWrapper, CustomNavigation } from './Caurousel.style';
import { useEffect, useState } from 'react';
import eventFetch from "../axios/config";
import { useNavigate } from 'react-router-dom';

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
    navigate(`/event/${event.id}`, {state: {event}});
  }

  return (
    <CardContainer>
      <SectionTitle>Eventos Recentes</SectionTitle>
      <Swiper
        slidesPerView={3}
        // pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // centeredSlides
        spaceBetween={15}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <CardWrapper onClick={() => handleCardClick(item)}>
              <CardImg>
                <ImgCard
                  src={item.imgEvent}
                  alt='slider'
                  className='slide-item'
                />
                <ContainerDate>
                  <DateText><span>{new Date(item.startDate).getDate()}</span>{new Date(item.startDate).toLocaleString('default', { month: 'long' })}</DateText>
                </ContainerDate>
              </CardImg>
              <CardInfo>
                <p>{item.name}</p>
                <div>
                  <FaLocationDot />
                  <small>{item.city}</small>
                </div>
              </CardInfo>
            </CardWrapper>
          </SwiperSlide>
        ))}

        <CustomNavigation className="swiper-button-next"></CustomNavigation>
        <CustomNavigation className="swiper-button-prev"></CustomNavigation>
      </Swiper>
    </CardContainer>

  )
}

export default Carousel
