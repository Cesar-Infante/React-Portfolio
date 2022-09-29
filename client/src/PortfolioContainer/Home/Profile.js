import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='icons'>
                        <a href="mailto: cesar261110@gmail.com" target="_blank" rel="noreferrer">
                            <i class="fa-solid fa-envelope icon"></i>
                        </a>
                        <a href="https://github.com/Cesar-Infante" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-github icon"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/cesarinfante/" target="_blank" rel="noreferrer">
                            <i class="fa-brands fa-linkedin icon"></i>
                        </a>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            Hello, I'm <span className='highlighted-text'>Cesar</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            <h1>
                                <Typewriter
                                    words={[
                                        "Software Engineer 👨🏽‍💻",
                                        "Ingeniero de Software 🇲🇽",
                                        "MERN Stack Dev 💻",
                                        "From warehouse Team Lead to Software Engineer! 🧑🏽‍💼"
                                    ]}
                                    loop={true}
                                    typeSpeed={70}
                                    deleteSpeed={45}
                                    cursor
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Coming from a background in warehouse leadership, teaching me discipline,
                                achieving deadlines, and constant growth. My main approach is the 5 P's,
                                "Proper Preparation Prevents Poor Performance". This approach ensures
                                I put in the time to learn and be prepared and not surprised.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'>
                            Hire Me 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
