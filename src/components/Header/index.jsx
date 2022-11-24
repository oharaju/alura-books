import {Menu, TextLogo, TextStrong, DivMenu, ListMenu} from './styles';
import Profile from '../../images/profile.svg';
import Bag from '../../images/bag.svg';

const ItemsMenu = ['CATEGORIAS', 'FAVORITOS','MINHA ESTANTE'];
const Icons = [Profile, Bag];

const Header = () => (
  <>
    <Menu>
      <img src="./images/logo.svg" />
      <TextLogo><TextStrong>Alura</TextStrong>Books</TextLogo>
      <DivMenu>

        <ListMenu>
          { ItemsMenu.map((Item) => (
            <li><p>{Item}</p></li>
          ))}
        </ListMenu>

        <div>
          {Icons.map((Icon) => (
            <img src={Icon}/>
          ))}
        </div>
        
      </DivMenu>
    </Menu>
  </>
);

export default Header;