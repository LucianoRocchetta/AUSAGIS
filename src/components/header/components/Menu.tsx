import { GrFacebook, GrTwitter, GrLinkedin, GrMail } from 'react-icons/gr'
import { BsArrowDownCircle } from 'react-icons/bs';
const options: String[] = ['About', 'Services', 'Training'];

const Menu = () => {
    return (
        <>
            <div className="menu-container">
                <img src="https://aeroterrausa.com/images/logos/ausa-logo.png" alt="#"></img>
                <div className="options-container">
                    <menu>
                        {options.map((option) => {
                            return <a className="menu-option" key={option}>{option}</a>
                        })}
                    </menu>
                    <button className="menu-btn">Contact Us</button>
                </div>
            </div>
            <div className="social-media-container">
                    <GrFacebook />
                    <GrTwitter />
                    <GrLinkedin />
                    <GrMail />
            </div>
            <div className="start-button">
                <BsArrowDownCircle />
            </div>
        </>
    )
}

export { Menu }