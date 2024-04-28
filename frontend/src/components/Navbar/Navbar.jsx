import LinkButton from './LinkButton';
import theme from '../../theme';
import { NavbarContainer, NavbarList} from './Navbar.style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <li>
          <LinkButton to="/" text="EventFinder" textColor={theme.colors.primary}/>
        </li>
        <li>
          <LinkButton to="/event/new" text="Criar Evento" bgColor={theme.colors.primary} textColor={theme.colors.secondary}/>
        </li>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
