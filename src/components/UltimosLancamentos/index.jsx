import { Container, CardLivros, LivroLancamento, NomeLivro } from './styles';
import { Title } from '../Title/styles';
import { livros } from './livrosLancamento';

function UltimosLancamentos() {
  return (
    <Container>
      <Title color="#F6AF25">Últimos Lançamentos</Title>
      <CardLivros>
        {
          livros.map(livro => (
            <LivroLancamento>
              <img src={livro.src}/>
              <NomeLivro>{livro.nome}</NomeLivro>
            </LivroLancamento>
          ))
        }
      </CardLivros>
      <sugestaoLivros></sugestaoLivros>
    </Container>
  )
}

export default UltimosLancamentos;