import Search from './Search.jsx'
import Logo from './Logo.jsx'

const NavBar = ({children}) => {

    return (
        <>
            <nav className="nav-bar">
                <Logo />
                {children}
            </nav>
        </>
    )
}
export default NavBar