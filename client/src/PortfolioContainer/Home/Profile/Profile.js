import React from 'react'
import Typical from 'react-typical'
import ScrollService from "../../../utilities/ScrollService";
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            {/* Font awesome style sheet has been linked in the index.html page. Use prefix fa to place the font awesome icons. https://www.w3schools.com/icons/fontawesome_icons_intro.asp*/}
                            <a href='https://www.linkedin.com/in/yap-yu-xiang-shawn/'>
                                <i className='fa fa-linkedin-square'></i>   
                            </a>
                            <a href='https://github.com/paynwahs'>
                                <i className='fa fa-github-square'></i>
                            </a>
                            {/* <a href='#'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-twitter'></i>
                            </a> */}
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello I'M <span className='highlighted-text'>Shawn</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev 😁",
                                    1000,
                                    "Full Stack Developer 💻",
                                    1000,
                                    "React Dev ",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                            Make The World A Better Place With A Developer                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' 
                        onClick={() => {ScrollService.scrollHandler.scrollToHireMe();}}
                        >
                            Hire Me
                        </button>
                        <a href="ShawnYapCV.pdf" download="Shawn Yap.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}
