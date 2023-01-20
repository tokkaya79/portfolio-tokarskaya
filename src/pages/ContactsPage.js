export default function Contacts() {
    return (
        <>
            <main className="section none">
                <div className="container">
                    <div className="page__ditails">
                        <h1 className="title-1">Contacts</h1>
                        <ul className="page__content">
                            <li className="page__content-item">
                                <h2 className="title-2">Location</h2>
                                <p className="page__text">Odesa, Ukraine</p>
                            </li>
                            <li className="page__content-item">
                                <h2 className="title-2">Telegram / WhatsApp</h2>
                                <a href="tel:+380663490919">
                                    <p className="page__text page__text--tel">
                                        +38 (066) 349-09-19
                                    </p>
                                </a>
                            </li>
                            <li className="page__content-item">
                                <h2 className="title-2">Email</h2>
                                <a href="mailto:tokkaya79@gmail.com">
                                    <p className="page__text--mail">
                                        tokkaya79@gmail.com
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
}
