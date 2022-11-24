import {Menu, Logo, TextLogo, TextStrong, DivList, ListMenu, ItemList, Link, DivIcons} from './styles';

const linkItems = [
  {
    name: 'Categorias',
    href: '#',
  },
  {
    name: 'Favoritos',
    href: '#',
  },
  {
    name: 'Minha Estante',
    href: '#',
  },
]

const icons = ['./images/profile.svg', './images/bag.svg'];

const Header = () => (
  <>
    <Menu>
      <Logo>
        <img src="./images/logo.svg" />
        <TextLogo><TextStrong>Alura</TextStrong>Books</TextLogo>
      </Logo>
      
      <DivList>
        <ListMenu>
          { linkItems.map((item) => (
            <ItemList><Link href={item.href}>{item.name}</Link></ItemList>
          ))}
        </ListMenu>

        <DivIcons>
          {icons.map((icon) => (
            <img src={icon}/>
          ))}
        </DivIcons>
      </DivList>
    </Menu>
  </>
);

export default Header;