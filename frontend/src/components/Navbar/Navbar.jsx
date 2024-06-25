import LinkButton from './LinkButton';
import theme from '../../theme';
import { LeftList, NavbarContainer, NavbarList, RightList } from './Navbar.style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarList>
        <LeftList>
          <li>
            <LinkButton to="/" text="EventFinder" textcolor={theme.colors.primary} islogo={true}/>
          </li>
        </LeftList>
        <RightList>
          <li>
            <LinkButton to="/my-events" text="Meus eventos" textcolor={theme.colors.primary} />
          </li>
          <li>
            <LinkButton to="/event/new" text="Criar Evento" backgroundcolor={theme.colors.primary} textcolor={theme.colors.secondary} />
          </li>
        </RightList>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
