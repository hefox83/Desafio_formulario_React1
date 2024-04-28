import React from 'react'

const SocialButtons = (props) => {
    return (
        <div className="social">
            <div style={{ fontSize:"50px",padding:"20px", color:'black'}}  className="footer-icon">
                <a  href="#"><i className={props.facebook}></i></a>
                <a href="#"><i className={props.instagram}></i></a>
                <a href="#"><i className={props.linkedin}></i></a>
            </div>
        </div>
    )
}
export default SocialButtons;