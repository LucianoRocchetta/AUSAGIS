import { TypeWritters, Menu, BackgroundMap } from "./components";

const Header = () => {
    return (
        <div className="header-container">
            <Menu />
            <div className='header-info'>
                <h1>AusaGIS</h1>
                <TypeWritters />
            </div>
            <BackgroundMap/>
        </div>
    )
}

export { Header };