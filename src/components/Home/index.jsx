import {Hero, Title, Subtitle} from './styles';
import InputSearch from '../InputSearch/styles';
import { livros } from '../InputSearch/dadosPesquisa';
import {useState, useEffect} from 'react';

const Home = () => {
  const [resultBooks, setResultBooks] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const parseValueInput = inputValue.toLowerCase().trim();

    if(parseValueInput.length > 0) {
      const resultValueInput = livros.filter(livro => livro.nome.toLowerCase().includes(parseValueInput));
      setResultBooks(resultValueInput);
      
      console.log(resultBooks, resultValueInput)
    } else {
      setResultBooks([]);
    }

    if(resultBooks.length == 0 && parseValueInput.length > 1) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
    
  }, [inputValue]);

  return (
    <Hero>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <InputSearch 
        type="text" 
        placeholder="Escreva sua próxima leitura"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      {noResults && <p>Nenhum livro encontrado</p>}
      { resultBooks.map( livro => (
        <div key={livro.id}>
          <img src={livro.src}/>
          <p>{livro.nome}</p>
        </div>
      ))}
    </Hero>
  )
}

export default Home;