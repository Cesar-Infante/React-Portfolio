import React from 'react';
import '../styles.scss';
import Weather from '../assets/Weather-DashboardV2.png';
import EcomBackend from '../assets/ecom-backend.gif';
import ReadMeGen from '../assets/ReadMeGenerator.png';
import NoteApp from '../assets/noteApp.png';
import PasswordGen from '../assets/Password-Gen.png'
import Dental from '../assets/Dental-Mockup.png';
import Snippets from '../assets/CSS-Snippets.png'
import Vanta from '../assets/vanta.png'

export default function ProjectsTwo() {
    return (
        // <!-- Multiple Projects Section -->
        <div className="container padding-bottom-lg">
            <h2 className="section-title text-white">Additional Projects</h2>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a href="https://cesar-infante.github.io/Weather-Dashboard/"><img className="card-img-top"
                            src={Weather} alt="Weather Weather-Dashboard" height="190" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <b>Open Call API Weather-Dashboard</b>
                            </h4>
                            <p className="text-start">A weather dashboard powered by <a
                                href="https://openweathermap.org/api/one-call-api">OpenWeather One Call API</a>.</p>
                            <p className="text-start">Displaying the current weather, along with displaying a 7-day forecast!</p>
                            <br />
                            <hr />
                            <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--hero"
                                href="https://cesar-infante.github.io/Weather-Dashboard/">
                                See Live
                            </a>
                            <a rel="noreferrer" target="_blank" className="cta-btn text-color-main"
                                href="https://github.com/Cesar-Infante/Weather-Dashboard">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a href="https://drive.google.com/file/d/10x0Z4jeBUMjyDE3DAUHybT4Eno_wnvZh/view"><img className="card-img-top"
                            src={EcomBackend} alt="ecom backend" height="190" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <b>MySQL E-Commerce-Backend</b>
                            </h4>
                            <p className="text-start">Backend for an application creating <a href="https://sequelize.org/">Sequelize</a>
                                Models along with <a href="https://expressjs.com/">Express</a> routes!</p>
                            <p className="text-start">
                                Utilizing Insomnia to send HTTP requests to the server and test MySQL database
                            </p>
                            <br />
                            <hr />
                            <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--hero"
                                href="https://drive.google.com/file/d/10x0Z4jeBUMjyDE3DAUHybT4Eno_wnvZh/view">
                                See Live
                            </a>
                            <a rel="noreferrer" target="_blank" className="cta-btn text-color-main"
                                href="https://github.com/Cesar-Infante/E-Commerce-Backend">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a href="https://github.com/Cesar-Infante/ReadMeGenerator/blob/main/README.md"><img className="card-img-top"
                            src={ReadMeGen} alt="Read Me Generator" height="190" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <b>CLI Read Me Generator</b>
                            </h4>
                            <p className="text-start">A read me generator on the terminal using <a href="https://nodejs.org/en/">NodeJS</a>
                                and npm package <a href="https://www.npmjs.com/package/inquirer#examples">Inquirer</a>.</p>
                            <p className="text-start">
                                It takes input from the user to create a professional style README.md
                            </p>
                            <br />
                            <hr />
                            <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--hero"
                                href="https://github.com/Cesar-Infante/ReadMeGenerator/blob/main/README.md">
                                See Live
                            </a>
                            <a rel="noreferrer" target="_blank" className="cta-btn text-color-main"
                                href="https://github.com/Cesar-Infante/ReadMeGenerator">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div className="card h-100">
                        <a href="https://github.com/Cesar-Infante/ReadMeGenerator/blob/main/README.md"><img className="card-img-top"
                            src={NoteApp} alt="Note App" height="190" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <b>Express Note App</b>
                            </h4>
                            <p className="text-start">Note taker application lets you write, save and delete notes.</p>
                            <p className="text-start">
                                The app utilizes <a href="https://nodejs.org/en/">NodeJS</a> and <a
                                    href="https://expressjs.com/">Express</a> to store and retrieve notes from a db.json file!
                            </p>
                            <br />
                            <hr />
                            <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--hero"
                                href="https://github.com/Cesar-Infante/ReadMeGenerator/blob/main/README.md">
                                See Live
                            </a>
                            <a rel="noreferrer" target="_blank" className="cta-btn text-color-main"
                                href="https://github.com/Cesar-Infante/ReadMeGenerator">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" style={{zIndex: 1}}>
                    <div className="card h-100">
                        <a href="https://cesar-infante.github.io/Password-Generator-Challenge/"><img className="card-img-top"
                            src={PasswordGen} alt="Password Generator" height="190" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <b>Password Generator</b>
                            </h4>
                            <p className="text-start">Password generator for this JavaScript challenge was definitely a test!
                                Researching and checking <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">MDN Web
                                    Docs</a> to learn was critical for
                                me.</p>
                            <p className="text-start">
                                Piece by piece things were being built out and as I went along I wrote many detailed comments to look
                                back and understand how it all came together.
                            </p>
                            <br />
                            <hr />
                            <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--hero"
                                href="https://cesar-infante.github.io/Password-Generator-Challenge/">
                                See Live
                            </a>
                            <a rel="noreferrer" target="_blank" className="cta-btn text-color-main"
                                href="https://github.com/Cesar-Infante/Password-Generator-Challenge">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" style={{zIndex: 1}}>
                    <div className="card h-100">
                        <a href="https://cesar-infante.github.io/Landing-Page/"><img className="card-img-top"
                            src={Dental} alt="Dental Mockup" height="190" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <b>Bootstrap Dental Mockup Landing Page</b>
                            </h4>
                            <p className="text-start">Dental mock-up was created for a dental office and demonstrates a clean, simple, and
                                working design.
                            </p>
                            <p className="text-start">
                                I challenged myself to create a modern and sleek design utilizing <a
                                    href="https://getbootstrap.com/">Bootstrap</a>, what we learned in week
                                5 of my coding Bootcamp.
                            </p>
                            <br />
                            <hr />
                            <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--hero"
                                href="https://cesar-infante.github.io/Landing-Page/">
                                See Live
                            </a>
                            <a rel="noreferrer" target="_blank" className="cta-btn text-color-main"
                                href="https://github.com/Cesar-Infante/Landing-Page">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" style={{ zIndex: 1}}>
                    <div className="card h-100">
                        <a href="https://cesar-infante.github.io/Mini-Project-CSS/"><img className="card-img-top"
                            src={Snippets} alt="CSS-Snippets" height="190" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <b>CSS Flexbox Code Snippets</b>
                            </h4>
                            <p className="text-start">Webpage holding a collection of CSS snippets. The best way to actively learn CSS is by
                                implementing it into a project, breaking things, and coming back with a functional working product.</p>
                            <p className="text-start">
                                By creating a responsive <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">flexbox</a>
                                grid,
                                you can view this application on a mobile device as well as a desktop
                            </p>
                            <br />
                            <hr />
                            <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--hero"
                                href="https://cesar-infante.github.io/Mini-Project-CSS/">
                                See Live
                            </a>
                            <a rel="noreferrer" target="_blank" className="cta-btn text-color-main"
                                href="https://github.com/Cesar-Infante/Mini-Project-CSS">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" style={{zIndex: 1}}>
                    <div className="card h-100">
                        <a href="https://cesar-infante.github.io/link-in-bio-page/"><img className="card-img-top" src={Vanta}
                            alt="link in bio page" height="190" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <b>Link in bio page</b>
                            </h4>
                            <p className="text-start">Calming link in bio page using <a href="https://www.vantajs.com/">VantaJS</a> to
                                create
                                an animated background!
                            </p>
                            <p className="text-start">
                                This page includes my Portfolio, LinkedIn, Github, Resume and a way to contact me!
                            </p>
                            <br />
                            <hr />
                            <a rel="noreferrer" target="_blank" className="cta-btn cta-btn--hero"
                                href="https://cesar-infante.github.io/link-in-bio-page/">
                                See Live
                            </a>
                            <a rel="noreferrer" target="_blank" className="cta-btn text-color-main"
                                href="https://github.com/Cesar-Infante?tab=repositories">
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}