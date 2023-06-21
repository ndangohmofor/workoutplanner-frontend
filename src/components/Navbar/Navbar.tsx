import { useState } from 'react';
import './NavbarStyles.css';
import { Nav } from 'react-bootstrap';

const Navbar = () => {

    const [clicked, setClicked] = useState<boolean>(false);

    const handleClick = () => {
        setClicked(clicked ? false : true);
    }

    return(
        <>
            <nav>
                <a href="index.html">
                    <img alt="Website Logo:  arm with a dumbbell" src="/images/Logo.png" />
                </a>
                <h2>Workout Planner</h2>
                <div id="navdiv">
                    <div className="navdiv-child">
                        <ul id="navbar">
                            <li><a className='active' href="index.html">Home</a></li>
                            <li><a href="index.html">About</a></li>
                            <li><a href="index.html">CheckIn/Out</a></li>
                            <li><a href="index.html">Machine Guides</a></li>
                            <li><a href="index.html">Workout Log</a></li>
                            <li><a href="index.html">Workout Metrics</a></li>
                            <li><a href="index.html">Reserved Classes</a></li>
                        </ul>
                    </div>
                    <div className="navdiv-child">
                        <ul id="navbar-right">
                            <li><a href="index.html">Login</a></li>
                            <li><a href="index.html">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
                <div id="mobile" onClick={handleClick}>
                    <i id="bar" className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
        </>
    )
}

export default Navbar;