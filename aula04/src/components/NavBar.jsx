import Search from './Search.jsx'
import Logo from './Logo.jsx'
import NumResults from './NumResults.jsx'

const NavBar = () => {

    return (
        <>
            <nav className="nav-bar">
                <Logo />
                <Search />
                <NumResults />
            </nav>
        </>
    )
}
export default NavBar