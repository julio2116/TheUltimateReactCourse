import Search from './Search.jsx'
import Logo from './Logo.jsx'

const NavBar = ({children}) => {

    return (
        <>
            <nav className="nav-bar">
                <Logo />
                <Search />
                {children}
            </nav>
        </>
    )
}
export default NavBar