import React from "react";
import bannerEvent from "../assets/bannerEvent.jpg";
import { HeaderWrapper, BannerImage, HeaderContainer, SloganHeader } from './Header.style';
import Search from "./Search";

const Header = ({ searchTerm, setSearchTerm, selectedLocation, setSelectedLocation }) => {
  return (
    <HeaderWrapper>
      <BannerImage src={bannerEvent} alt="banner" />

      <HeaderContainer>
        <SloganHeader>
          Encontre os melhores eventos ou cadastre e gerencie os seus com facilidade
        </SloganHeader>

        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
