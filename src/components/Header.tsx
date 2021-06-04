export function Header() {
    return (
        <header className="">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img className="logo-header" src="http://gabrielhenriq.com.br/tecnho-girls/logo-tecnho-girls.png" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="quem-somos">Sobre nós</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Eventos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="contact.html">Contato</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}