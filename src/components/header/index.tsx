import { TypeWritters, Menu, BackgroundMap } from "./components";

const Header = () => {
    return (
        <>
            <Menu />
            <div className='header-info'>
                <h1>AusaGIS</h1>
                <TypeWritters />
            </div>
            <BackgroundMap/>
        </>
    )
}

export { Header };