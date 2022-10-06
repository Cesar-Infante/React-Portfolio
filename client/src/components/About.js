import React from 'react';
import '../styles.scss';
import myProfile from '../assets/my-profile.jpg';
import Resume from "../assets/Resume - Cesar Infante.pdf";

export default function About() {
    return (
        <div>
            <section id="about">
                <div class="container">
                    <h2 class="section-title load-hidden">About me</h2>
                    <div class="row about-wrapper">
                        <div class="col-md-6 col-sm-12">
                            <div class="about-wrapper__image load-hidden">
                                <img alt="Profile" class="img-fluid rounded shadow-lg" height="auto" width="300px"
                                    src={myProfile} style={{ borderRadius: '50% !important' }} />
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <div class="about-wrapper__info load-hidden">
                                <p class="about-wrapper__info-text fs-2">
                                    Software engineer leveraging a background in warehouse leadership teaching me discipline, achieving
                                    deadlines, and pursuing continuous growth, making me a strong addition to any engineering team.
                                </p>
                                <p class="about-wrapper__info-text fs-2">
                                    My main approach is the 5 P's,
                                </p>
                                <b class="about-wrapper__info-text fs-2">"Proper Preparation Prevents Poor Performance".</b>

                                <span class="d-flex mt-3">
                                    <a rel="noreferrer" target="_blank" class="cta-btn cta-btn--resume"
                                        href={ Resume }>
                                        View Resume
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}