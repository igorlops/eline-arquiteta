export default function Navbar(){
    return ( 
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src="img/logo.png" alt="" width={"150"} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Sobre</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Projetos</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contato</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}