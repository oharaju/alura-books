import { Card, Button, Subtitle, Description, BoxButton } from './styles';
import { Title } from '../Title/styles';

function SugestaoLivros({title, subtitle, description}) {
  return(
    <Card>
      <div>
        <Title size="20px" color="#F6AF25;" align="left" spacing="0">{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </div>
      <BoxButton>
        <img src="./images/livro-angular.png"/>
        <Button>Saiba mais</Button>
      </BoxButton>
    </Card>
  )
}

export default SugestaoLivros;