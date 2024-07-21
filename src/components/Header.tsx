import { Link } from "react-router-dom";


function Header() {

  return (
    <>
      <nav>
        <Link to={"/home"}>Home</Link>
        <Link to={"/produtos"}>Produtos</Link>
        <Link to={"/servicos"}>Serviços</Link>
        <Link to={"/contato"}>Contato</Link>
        <Link to={"/sobre"}>Sobre</Link>
        <Link to={"/faq"}>FAQ</Link>
      </nav>
    </>
  )
}

export default Header;
