import {Menu, Logo, TextLogo, TextStrong} from './styles';

const Header = () => (
  <>
    <Menu>
      <Logo src="./images/logo.svg" />
      <TextLogo><TextStrong>Alura</TextStrong>Books</TextLogo>
    </Menu>
  </>
);

export default Header;