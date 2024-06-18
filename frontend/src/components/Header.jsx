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
          O poder de divulgação está em suas mãos.
          Cadastre e gerencie seus eventos
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
