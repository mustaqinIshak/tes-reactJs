
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <>
            <nav>
                <div className='nav-list'>
                    <div className="nav-menu">
                        <NavLink activeclassname="active" to='/'>
                            <span>home</span>
                        </NavLink>
                    </div>
                    <div className="nav-menu" >
                        <NavLink activeclassname="active" to='/coin_list'>
                        <span>Coin List</span>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}