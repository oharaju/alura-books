function SugestaoLivros({title, subtitle, description}) {
  return(
    <div>
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <p>{description}</p>
      <img src="./images/livro-angular.png"/>
      <button>Saiba mais</button>
    </div>
  )
}

export default SugestaoLivros;