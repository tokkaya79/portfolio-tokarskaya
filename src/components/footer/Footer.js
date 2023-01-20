import fb from '../../img/icons/fb.svg';
import git from '../../img/icons/git.svg';
import code from '../../img/icons/code.svg';
import link from '../../img/icons/link.svg';

import './style.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <ul className="social">
                            <li className="social__item">
                                <a
                                    className="social__link"
                                    href="https://www.facebook.com/valentuna.tokarskaya"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="social__icon"
                                        src={fb}
                                        alt="fb"
                                    />
                                </a>
                            </li>
                            <li className="social__item">
                                <a
                                    className="social__link"
                                    href="https://github.com/tokkaya79"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="social__icon"
                                        src={git}
                                        alt="git"
                                    />
                                </a>
                            </li>
                            <li className="social__item">
                                <a
                                    className="social__link"
                                    href="https://codepen.io/tokkaya79"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="social__icon"
                                        src={code}
                                        alt="inst"
                                    />
                                </a>
                            </li>
                            <li className="social__item">
                                <a
                                    className="social__link"
                                    href="https://www.linkedin.com/in/valentina-tokarskaya-708502252/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className="social__icon"
                                        src={link}
                                        alt="link"
                                    />
                                </a>
                            </li>
                        </ul>
                        <div className="copyright">
                            <p className="copyright__text">
                                © 2022 frontend-dev.com
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
