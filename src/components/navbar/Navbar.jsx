import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">HAVEN</span>
        <div className="navItems">
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar