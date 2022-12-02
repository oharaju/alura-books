import {Hero, Title, Subtitle} from './styles';
import InputSearch from '../InputSearch/styles';
import {useState} from 'react';

const Home = () => {
  const [bookText, setBookText] = useState('');
  const [contador, setContador] = useState(0); 

  return (
    <Hero>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <InputSearch type="text" 
        placeholder="Escreva sua próxima leitura"
        onKeyUp={event => setBookText(event.target.value)}
      />
      <p>{bookText}</p>

      <div>
        <button onClick={() => setContador(contador-1)} disabled={contador<=0}>-</button>
        {contador}
        <button onClick={() => setContador(contador+1)}>+</button>
      </div>
      
    </Hero>
  )
}

export default Home;