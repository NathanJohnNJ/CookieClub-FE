import './footer.css';

const Footer = () => {

    return (
        <div className="footerMain">
            
            <div className="socials">
                <h1>FOLLOW US ON SOCIAL MEDIA</h1>
                <div className="socialLogos">
                    <img className="socialLogo" src={require("./images/facebook.png")} alt="facebook"></img>
                    <img className="socialLogo" src={require("./images/instagram.png")} alt="instagram"></img>
                    <img className="socialLogo" src={require("./images/twitter.png")} alt="twitter"></img>
                </div>
            </div>
            <div className="contact">
                <p className="emailAdd">EMAIL ADDRESS</p>
                <p className="emailAdd"><a className="email" href="mailto:hello@thecookieclub.com">hello@thecookieclub.com</a></p>
                <p className="phoneNumLabel">PHONE NUMBER</p>
                <p className="phoneNum">01234-COOKIES</p>
            </div>
        
            <div className="footerPicDiv">
                <img className="footerPic" src={require("./images/hand-footer.png")} alt="Hand holding cookie"></img>
            </div>
        </div>
    )
}

export default Footer;