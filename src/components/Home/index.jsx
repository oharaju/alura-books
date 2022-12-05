import {Hero, Title, Subtitle} from './styles';
import InputSearch from '../InputSearch/styles';
import { livros } from '../InputSearch/dadosPesquisa';
import {useState} from 'react';

const Home = () => {
  const [bookText, setBookText] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const searchBooks = event => {
    const valueInput = event.target.value.toLowerCase();
    const resultValueInput = livros.filter(livro => livro.nome.toLowerCase().includes(valueInput))
    setBookText(resultValueInput)

    if(resultValueInput.length == 0) {
      setNoResults(true)
    } else {
      setNoResults(false)
    }
  }

  return (
    <Hero>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <InputSearch type="text" 
        placeholder="Escreva sua próxima leitura"
        onKeyUp={searchBooks}
      />
      {noResults && <p>Nenhum livro encontrado</p>}
      { bookText.map( livro => (
        <div>
          <img src={livro.src}/>
          <p>{livro.nome}</p>
        </div>
      ))}
    </Hero>
  )
}

export default Home;