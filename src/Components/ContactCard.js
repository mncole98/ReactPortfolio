import React from "react";


function ContactCard(props) {
    return (
        <div className="contact-card">
            <h1 className="text-center contact-box">Contact Information</h1>

            <div className="card contactCard contact-card-details">
                
                <div className="card-content">
                    <ul>
                        <li>
                        <h1>Email</h1>
                            <a
                                href="mailto:webmaster@mncole98@gmail.com"
                                className="ml-4 mt-4 font-weight-bold"
                            >
                                <h2>mncole98@gmail.com</h2>
                            </a>
                        </li>
                        <li>
                        <h1>LinkedIn</h1>
                            <a
                                href="https://www.linkedin.com/in/matthew-cole-6652071bb​"
                                className="ml-4 mt-4 font-weight-bold"
                            >
                                <h2>View Profile</h2>
                            </a>
                        </li>
                        <li>
                        <h1>GitHub</h1>
                            <a
                                href="https://github.com/mncole98"
                                className="ml-4 mt-4 font-weight-bold"
                            >
                                ​<h2>View Profile</h2>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="closer">
                    {/* <div className="thankyou">
                        <img
                            src={Profile}
                            alt="profile"
                            className="contactprofile"
                        ></img>
                    </div> */}
                    <div className="thankyoutext">
                        <p>
                            <h1>Thank you for visiting my site!</h1>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCard;