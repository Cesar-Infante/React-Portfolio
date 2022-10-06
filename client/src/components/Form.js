import React from 'react';
import '../styles.scss';

export default function Hero() {
    return (
        <section id="contact">
            <section className="inquiries">
                <h2 className="section-title">Questions or Career Opportunities?</h2>
                <div className="container">
                    <p id="sub-title">Contact me!</p>
                    <p id="sub-title">Email: cesar261110@gmail.com</p>
                    <form id="form">
                        <select name="question" className="questions-input" id="option">
                            <option value="Career Opportunities">Career Opportunities</option>
                            <option value="General Questions">General Questions</option>
                        </select>

                        <input className="questions-input" type="text" name="from_name" placeholder="Name" id="from_name" />

                        <input className="questions-input" type="email" name="to_name" id="contactEmail" placeholder="Email" />

                        <textarea className="questions-input" type="text" name="message" id="message" placeholder="Message"></textarea>

                        <button type="submit" className="event-btn" id="contactSend" value="send">
                            <p id="submitBtn">SEND</p>
                        </button>
                    </form>
                </div>
            </section>
        </section>
    )
}