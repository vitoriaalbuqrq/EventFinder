import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLocationDot } from "react-icons/fa6";
import { SectionTitle, ImgCard, CardContainer, CardImg, ContainerDate, DateText, CardInfo, CardWrapper, CustomNavigation } from './Caurousel.style';

const Carousel = () => {
  const data = [
    { id: '1', image: 'https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?b=1&s=612x612&w=0&k=20&c=MmbIgKebz8Y8JOJExdvLNemFhQNdBzTsgpYUBbZ6Fuc=' },
    { id: '2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYnooORbmNfAo0cscpQC6bjcLzrelDHlD3A&s' },
    { id: '3', image: 'https://img.freepik.com/free-photo/people-celebrating-party_53876-14410.jpg' },
    { id: '4', image: 'https://i.pinimg.com/originals/7e/09/1b/7e091b805bbffb3daea7df65816a971a.jpg' },
    { id: '5', image: 'https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?b=1&s=612x612&w=0&k=20&c=MmbIgKebz8Y8JOJExdvLNemFhQNdBzTsgpYUBbZ6Fuc=' },
    { id: '6', image: 'https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?b=1&s=612x612&w=0&k=20&c=MmbIgKebz8Y8JOJExdvLNemFhQNdBzTsgpYUBbZ6Fuc=' },
    { id: '7', image: 'https://media.istockphoto.com/id/501387734/photo/dancing-friends.jpg?b=1&s=612x612&w=0&k=20&c=MmbIgKebz8Y8JOJExdvLNemFhQNdBzTsgpYUBbZ6Fuc=' },
  ];

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
            <CardWrapper>
              <CardImg>
                <ImgCard
                  src={item.image}
                  alt='slider'
                  className='slide-item'
                />
                <ContainerDate>
                  <DateText><span>19</span>abril</DateText>
                </ContainerDate>
              </CardImg>
              <CardInfo>
                <p>Show ao vivo - Dj matheus</p>
                <div>
                  <FaLocationDot />
                  <small>Cidade</small>
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
