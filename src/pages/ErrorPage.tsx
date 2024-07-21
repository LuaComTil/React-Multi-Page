import { Link } from "react-router-dom"

function ErrorPage() {

  return (
    <>
      <div>
        <h6>Erro 404! Página não encontrada D':</h6>
        <Link to={"/"}>Voltar para a Home</Link>
      </div>
    </>
  )
}

export default ErrorPage
