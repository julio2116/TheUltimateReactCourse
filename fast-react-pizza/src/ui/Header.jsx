import { Link } from 'react-router'
import SearchOrder from '../features/order/SearchOrder'

function Header() {
    return (
        <>
            <header>
                <Link to='/'>Fast React Pizza Co.</Link>
                <SearchOrder />
                <p>Jonas</p>
            </header>
        </>
    )
}
export default Header