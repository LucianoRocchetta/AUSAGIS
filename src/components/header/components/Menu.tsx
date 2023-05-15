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
        </>
    )
}

export { Menu }