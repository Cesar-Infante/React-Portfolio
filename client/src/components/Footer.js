import React from 'react';
import '../styles.scss';

export default function Footer() {
    return (
        <footer class="footer navbar-static-bottom navbar-dark bg-transparent">
            <div class="container">
                <a rel="noreferrer" href="#top" class="back-to-top">
                    <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
                </a>
                <div class="social-links">
                    <a rel="noreferrer" href="mailto: cesar261110@gmail.com" target="_blank">
                        <i class="fa fa-solid fa-envelope fa-inverse"></i>
                    </a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/cesarinfante/" target="_blank">
                        <i class="fa fa-linkedin fa-inverse"></i>
                    </a>
                    <a rel="noreferrer" href="https://github.com/Cesar-Infante" target="_blank">
                        <i class="fa fa-github fa-inverse"></i>
                    </a>
                </div>

                <hr />
            </div>
        </footer>
    )
}