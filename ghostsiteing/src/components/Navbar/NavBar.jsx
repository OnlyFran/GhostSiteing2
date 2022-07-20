import CartWidget from "../CartWidget/CartWidget"

function NavBar({children}) {
    return (
      <div className="App">
        <nav className="navbar container-fluid navbar-expand-lg navbar-dark bg-dark">
              <a className="navbar-brand" href="#">GhostSiteing</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Comunidad</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Únete</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
                      Contacto
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" target="_blank" href="">Instagram</a>
                      <a className="dropdown-item" target="_blank" href="">Twitter</a>
                      <a className="dropdown-item" target="_blank" href="">Twitch</a>
                    </div>
                  </li>
                </ul>
              </div>
              <CartWidget />
            </nav>
            {children}
      </div>
    )
}

export default NavBar