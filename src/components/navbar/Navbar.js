import { NavLink } from 'react-router-dom';

import BtnDarkMood from '../btnDarkMood/BtnDarkMood';

import './style.css';

const Navbar = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    return (
        <>
            <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <NavLink
                            to="/portfolio-tokarskaya/skills"
                            className="logo"
                        >
                            <strong>V.Tokarskaya</strong> portfolio
                        </NavLink>

                        <BtnDarkMood />
                        <ul className="nav-list">
                            <li className="nav-list__item">
                                <NavLink
                                    to="/portfolio-tokarskaya/"
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink
                                    }
                                >
                                    Projects
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink
                                    to="/portfolio-tokarskaya/skills"
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink
                                    }
                                >
                                    Skills
                                </NavLink>
                            </li>
                            <li className="nav-list__item">
                                <NavLink
                                    to="/portfolio-tokarskaya/contacts"
                                    className={({ isActive }) =>
                                        isActive ? activeLink : normalLink
                                    }
                                >
                                    Contacts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
