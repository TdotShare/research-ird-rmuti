import type { NextPage } from 'next'
import { langDisplay } from '../../../../config/lang';



type AppProps = {
    lang: string
};

const Header: NextPage<AppProps> = ({ lang = "th" }) => {

    if (!["th", "en"].includes(lang)) {
        lang = "th"
    }

    const changeLang = () => {
        let path_lang = `https://${window.location.host}/main/?lang=${lang === 'th' ? 'en' : 'th'}`
        window.location.href = path_lang
    }

    return (
        <header className="header header__bg">

            <div className="header__main__menu">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-2">
                            <div className="header__logo">
                                <a href="index.html">
                                    <img src="./irdmain_and_logo-02.png" alt="Logo" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <nav className="header__menu">
                                <ul className="main-menu main-menu-white">
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://ird.rmuti.ac.th/main/">{langDisplay[lang].menu_main_home}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://mis-ird.rmuti.ac.th/hr/system/psoffice">{langDisplay[lang].menu_main_personnel}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://mis-ird.rmuti.ac.th/main">{langDisplay[lang].menu_main_information}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://ird.rmuti.ac.th/2020/world/downloads">{langDisplay[lang].menu_main_doc_download}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://ird.rmuti.ac.th/main/archives/2039">{langDisplay[lang].menu_main_contact}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" onClick={() => changeLang()} >{langDisplay[lang].menu_main_change_lang} ({lang === "th" ? "en" : "th"})</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>


            <div className="header__mobile__menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header__mobile__menu__item">
                                <div className="header__logo">
                                    <a href="index.html">
                                        <img src="./irdmain_and_logo-02.png" alt="Logo" />
                                    </a>
                                </div>
                                <div className="header__mobile__button">
                                    <button data-trigger="#navbar_main" className="d-lg-none btn-menu-bars" type="button">
                                        <i className="fa fa-bars" />
                                    </button>
                                    <nav id="navbar_main" className="mobile-offcanvas navbar">
                                        <div className="offcanvas-header">
                                            <button className="mobile__menu__close">×</button>
                                        </div>
                                        <ul className="navbar-nav mobile-menu">
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://ird.rmuti.ac.th/main/">{langDisplay[lang].menu_main_home}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://mis-ird.rmuti.ac.th/hr/system/psoffice">{langDisplay[lang].menu_main_personnel}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://mis-ird.rmuti.ac.th/main">{langDisplay[lang].menu_main_information}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://ird.rmuti.ac.th/2020/world/downloads">{langDisplay[lang].menu_main_doc_download}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://ird.rmuti.ac.th/main/archives/2039">{langDisplay[lang].menu_main_contact}</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" onClick={() => changeLang()} >{langDisplay[lang].menu_main_change_lang} ({lang === "th" ? "en" : "th"})</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </header>

    )
}

export default Header