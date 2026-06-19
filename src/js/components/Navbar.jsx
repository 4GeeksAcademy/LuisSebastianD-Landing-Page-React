const Navbar = () => {
    return (
            <nav className="navbar bg-dark navbar-expand-sm" data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="mynavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active fw-bold" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;