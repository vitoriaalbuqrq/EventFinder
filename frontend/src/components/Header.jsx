import bannerEvent from "../assets/bannerEvent.jpg";
import { HeaderWrapper, BannerImage, HeaderContainer,SloganHeader, SearchContainer, CustomInput, CustomSelect} from './Header.style';

const Header = () => {
  return (
    <HeaderWrapper>
      <BannerImage src={bannerEvent} alt="banner"/>
      <HeaderContainer>
        <SloganHeader>
          O poder de divulgação está em suas mãos.
          Cadastre e gerencie seus eventos
        </SloganHeader>

        <SearchContainer>
          <CustomInput type="text" placeholder="Pesquise por um evento..." />
          <CustomSelect>
            <option value="Localização">Localização</option>
          </CustomSelect>
        </SearchContainer>

      </HeaderContainer>
    </HeaderWrapper>

  )
}

export default Header