import { Container, CardLivros, LivroLancamento, NomeLivro } from './styles';
import { Title } from '../Title/styles';
import { livros } from './livrosLancamento';
import SugestaoLivros from '../SugestaoLivros';
 

function UltimosLancamentos() {
  return (
    <Container>
      <Title color="#F6AF25">Últimos Lançamentos</Title>
      <CardLivros>
        {
          livros.map(livro => (
            <LivroLancamento key={livro.id}>
              <img src={livro.src}/>
              <NomeLivro>{livro.nome}</NomeLivro>
            </LivroLancamento>
          ))
        }
      </CardLivros>

      <SugestaoLivros
        title="Talvez você se interesse por.."
        subtitle="Angular 11"
        description="Construindo uma aplicação com a plataforma Google"
      />
    </Container>
  )
}

export default UltimosLancamentos;