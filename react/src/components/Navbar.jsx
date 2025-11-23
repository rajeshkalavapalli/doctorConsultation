import { Routes, Route, Link } from 'react-router-dom';
import logo from '../assets/images/medexa.png';
import LoginPage from './Loginpage';
import Login from './login';

export default function Navbar() {

    const navButtons = [
        { name: "Home", path: "/home" },
        { name: "Doctor Consultation", path: "/doctor-consultation" },
        { name: "Diagnostic", path: "/diagnostic" },
        { name: "Home Care", path: "/home-care" },
        { name: "Physio", path: "/physio" },
        { name: "Radiology", path: "/radiology" },
        { name: "About Us", path: "/about-us" },
    ];

    return (
        <div>
            <div className='navbutton flex items-center w-full py-3'>
            <img src={logo} alt="logo" width={120} />

            <nav className='ml-auto mr-10'>
                <ul className='flex gap-8'>
                    {navButtons.map((item) => (
                        <li key={item.name}>
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div>
            <Link to="/LoginPage">
                <button className='login'>Login/Register</button>
            </Link>
        </div>
        </div>                    
        
        </div>
        
    );
}
