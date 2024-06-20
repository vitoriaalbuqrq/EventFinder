import LinkButton from './LinkButton';
import theme from '../../theme';
import { LeftList, NavbarContainer, NavbarList, RightList } from './Navbar.style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <LeftList>
          <li>
            <LinkButton to="/" text="EventFinder" textColor={theme.colors.primary} isLogo={true}/>
          </li>
        </LeftList>
        <RightList>
          <li>
            <LinkButton to="/my-events" text="Meus eventos" textColor={theme.colors.primary} />
          </li>
          <li>
            <LinkButton to="/event/new" text="Criar Evento" bgColor={theme.colors.primary} textColor={theme.colors.secondary} />
          </li>
        </RightList>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
