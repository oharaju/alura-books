import {Hero, Title, Subtitle} from './styles';
import InputSearch from '../InputSearch/styles';

const Home = () => (
  <>
    <Hero>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <InputSearch type="text" placeholder="Escreva sua próxima leitura"/>
    </Hero>
  </>
);

export default Home;