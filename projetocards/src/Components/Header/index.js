import './header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
    <header>
        <Link className='logo' to="/">L&C</Link>
        <div className='logup'>
        <Link className='signup' to={"/signup"}>Sign up</Link>
        <Link className='login' to={"/login"}>Login</Link>
        </div>
    </header>
    )
}

export default Header;