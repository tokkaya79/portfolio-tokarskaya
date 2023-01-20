import './style.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>
                            Hi, my name is <em>Valentina</em>
                        </strong>
                        <br /> a frontend developer
                    </h1>
                    <div className="header__text">
                        <p>with passion for learning and creating.</p>
                    </div>
                    <a
                        className="btn"
                        href="/img/Tokarska Valentyna Front-end(en).pdf"
                        download
                    >
                        Download CV
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
