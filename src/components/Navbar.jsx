import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav id='navbar'>
            <h2>
                <Link to='/'>MovieMania</Link>
            </h2>
            <form>
                <input type='text' placeholder='Busque um filme' />
                <button type='submit'>Buscar</button>
            </form>
        </nav>
    )
};

export default Navbar;