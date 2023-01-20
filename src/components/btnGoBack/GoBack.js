import { NavLink } from 'react-router-dom';
// import goBackBlack from './img/go-back-black.svg';
// import goBackWhite from './img/go-back-white.svg';

import './style.css';

const GoBack = () => {

    return (
        <NavLink to="/portfolio-tokarskaya">
            <button className="btn__go-back">
                {/* <img
                    src={document.querySelector('body').classList.contains('dark') ? goBackWhite : goBackBlack}
                    alt="iconGoBack"
                /> */}
                return
            </button>
        </NavLink>
    );
};

export default GoBack;
