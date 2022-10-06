import React from 'react';
import '../styles.scss';
import popumai from "../assets/pop-umai.png";
import platello from '../assets/Platello.png'

export default function Projects() {
    return (
        <section id="projects">
            <div class="container">
                <div class="project-wrapper">
                    <h2 class="section-title">Client Experience</h2>

                    {/* <!-- Notice: each .row is a project --> */}
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <div class="project-wrapper__text load-hidden">
                                <h3 class="project-wrapper__text-title">Pop Umai</h3>
                                <div>
                                    <p class="mb-4">
                                        My team, consisting of 3 developers and I partnered up with a local business owner in order to build a
                                        website for her company, Pop Umai.
                                    </p>
                                    <p>
                                        As a team we had multiple meetings
                                        with the client to take various ideas and desires for the website and come up with a clean, cohesive
                                        design.</p>
                                    <p>
                                        The purpose of this project was to collaboratively build a real-world, full-stack web application
                                        that demonstrates everything we have learned over the last several months in our bootcamp.
                                    </p>
                                </div>
                                <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero" href="https://pop-umai.herokuapp.com/">
                                    See Live
                                </a>
                                <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
                                    href="https://github.com/PreDevz/POP-Umai">
                                    Source Code
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-8 col-sm-12">
                            <div class="project-wrapper__image load-hidden">
                                <a rel="noreferrer" href="https://pop-umai.herokuapp.com/" target="_blank">
                                    <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
                                        class="thumbnail rounded js-tilt">
                                        <img alt="Project" class="img-fluid" src={popumai}
                                            style={{ borderRadius: '10px !important' }} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /END Project --> */}

                    {/* <!-- Notice: each .row is a project --> */}
                    <h2 class="section-title">Project Experience</h2>
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <div class="project-wrapper__text load-hidden">
                                <h3 class="project-wrapper__text-title">Platello</h3>
                                <div>
                                    <p class="mb-4">
                                        Platello was a group project we collaboratively built out that takes in
                                        user input through a modal and provides 3 randomized foods and drinks.
                                    </p>
                                    <p>
                                        Being apart of the team
                                        taught me a lot, during this project we encountered various bugs and issues but it only
                                        furthered our knowledge on how to approach these situations.
                                    </p>
                                    <p>
                                        Throughout the two weeks
                                        my responsibility was building out the modals and storing users input into localStorage
                                        and the outcome still amazes me!
                                    </p>
                                </div>
                                <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero"
                                    href="https://predevz.github.io/Platello/">
                                    See Live
                                </a>
                                <a rel="noreferrer" target="_blank" class="cta-btn text-color-main"
                                    href="https://github.com/PreDevz/Platello">
                                    Source Code
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-8 col-sm-12">
                            <div class="project-wrapper__image load-hidden">
                                <a rel="noreferrer" href="https://predevz.github.io/Platello/" target="_blank">
                                    <div data-tilt data-tilt-max="4" data-tilt-glare="true" data-tilt-max-glare="0.5"
                                        class="thumbnail rounded js-tilt">
                                        <img alt="Project" class="img-fluid" src={platello}
                                            style={{ borderRadius: '10px !important' }} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
