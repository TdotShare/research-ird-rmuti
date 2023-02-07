import type { NextPage } from 'next'
import { titleConfig } from '../../../../config/title'
import { langDisplay } from '../../../../config/lang';


type AppProps = {
    lang: string
};


const Footer: NextPage<AppProps> = ({ lang = "th" }) => {

    if (!["th", "en"].includes(lang)) {
        lang = "th"
    }

    return (
        <>
            <footer className="footer">
                {/* Footer top section start */}
                <div style={{ paddingTop: "5%" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <aside className="footer__widget">
                                    <div className="footer__info">
                                        <div className="footer__logo">
                                            <img src="./irdmain_and_logo-02.png" alt="image" />
                                        </div>
                                        <div className="footer__social__link">
                                            <ul>
                                                <li>
                                                    <a href="https://www.facebook.com/profile.php?id=100064713641874">
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fab fa-youtube" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-lg-3 col-6">
                                        <aside className="footer__widget wow fadeInUp" data-wow-delay="0.4s">
                                            <h2 className="footer__widget__title">{langDisplay[lang].footer_quick_link}</h2>
                                            <ul className="footer__widget__list">
                                                <li><a href="https://ird.rmuti.ac.th/main/archives/category/activity">กิจกรรม สวพ. </a></li>
                                                <li><a href="https://ird.rmuti.ac.th/main/archives/category/public_relations">ประชาสัมพันธ์ สวพ.</a></li>
                                                <li><a href="https://ird.rmuti.ac.th/main/archives/1721">จดหมายข่าว</a></li>
                                                <li><a href="https://ird.rmuti.ac.th/main">เว็บข่าว สวพ.</a></li>
                                            </ul>
                                        </aside>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <aside className="footer__widget wow fadeInUp" data-wow-delay="0.2s">
                                            <h2 className="footer__widget__title">{langDisplay[lang].footer_system_link}</h2>
                                            <ul className="footer__widget__list">
                                                <li><a href="https://mis-ird.rmuti.ac.th/gs/admin/login">ระบบเก็บข้อมูล Google scholar</a></li>
                                                <li><a href="https://www.mis-ird.rmuti.ac.th/conceptpropff/auth">ระบบการรับข้อเสนอ FF</a></li>
                                                <li><a href="https://research.ird.rmuti.ac.th/jourregis/home">ระบบลงทะเบียนเข้าร่วมโครงการอบรม</a></li>
                                                <li><a href="https://mis-ird.rmuti.ac.th/main/">ระบบสารสนเทศทั้งหมด</a></li>
                                            </ul>
                                        </aside>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <aside className="footer__widget wow fadeInUp" data-wow-delay="0.3s">
                                            <h2 className="footer__widget__title">{langDisplay[lang].footer_internal_department_link}</h2>
                                            <ul className="footer__widget__list">
                                                <li><a href="https://admin.ird.rmuti.ac.th/">บริหารงานทั่วไป</a></li>
                                                <li><a href="https://academic.ird.rmuti.ac.th/">บริการวิชาการ</a></li>
                                                <li><a href="https://research.ird.rmuti.ac.th/">วิจัยและพัฒนา</a></li>
                                                <li><a href="https://ip.ird.rmuti.ac.th/">ทรัพย์สินทางปัญญา</a></li>
                                            </ul>
                                        </aside>
                                    </div>
                                    <div className="col-lg-3 col-6">
                                        <aside className="footer__widget wow fadeInUp" data-wow-delay="0.5s">
                                            <h2 className="footer__widget__title">{langDisplay[lang].footer_contact_us}</h2>
                                            <ul className="footer__widget__list">
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-phone" />
                                                        {titleConfig.Tel}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="fa fa-envelope" />
                                                        ird@rmuti.ac.th
                                                    </a>
                                                </li>
                                            </ul>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer top section end */}
                {/* Footer bottom section start */}
                <div className="footer__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="footer__copyright">
                                    <h2>
                                        Copyright <a href="https://ird.rmuti.ac.th/main">{langDisplay[lang].breadcrumb_organization_name} / {langDisplay[lang].breadcrumb_rmuti_name}</a> All Rights Reserved
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer bottom section end */}
            </footer>

        </>


    )
}

export default Footer