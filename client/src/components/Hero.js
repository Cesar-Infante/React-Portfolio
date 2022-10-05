import React from 'react';
import '../styles.scss'

export default function Hero() {
    return (
        <div id="top">
            <nav className="navbar navbar-expand-md py-4 navbar-dark bg-transparent shadow-md">
                <div className="container-fluid">
                    <a className="navbar-brand fs-1 fw-bold" href="."><span className="text-color-main">Cesar Infante</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link mx-3 fs-2 fw-bold" href="https://github.com/Cesar-Infante" target="_blank" rel="noreferrer"
                                    Github>Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 fs-2 fw-bold" href="https://www.linkedin.com/in/cesarinfante" rel="noreferrer"
                                    target="_blank" linkedin>Linkedin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 fs-2 fw-bold" href="#contact" Contact Me>Contact Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 fs-2 fw-bold" href="#myProjects" Projects>Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mx-3 fs-2 fw-bold" href="assets/Resume - Cesar Infante.pdf" target="_blank"
                                    Resume>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}