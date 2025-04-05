import  {Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <p><Link to="/">Home</Link></p>
      <p><Link to="/contact">Contatos</Link></p>
    </div>
  )
}

export default Navbar
