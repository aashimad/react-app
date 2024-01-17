import React from 'react';
import './Footer.css';
import {footerInformation, aboutUs, footerAccount, storeDetails, socialIcons} from '../../constants/constants';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {

    const getFooterDetails = (options: string[], key: string) => {
        return options.map((info: string, index: number) => (
            <li key={`${key}-${index}`}>
                <a href="#">{info}</a>
            </li>
        ));
    };

    const getSocialImages = () => {
        return socialIcons.map((icons: string, index: number) => (
            <a href="#" key={`social-${index}`}>
                <img src={icons} alt="social icon" />
            </a>
        ));
    };

    const paymentOptionsImages = () => {
        return [...Array(5)].map((_, index: number) => (
            <img
                key={`payment-${index}`}
                src={`/assets/images/payment/${index + 1}.png`}
                alt="payment cards"
            />
        ));
    };

    return (
        <div className="mds-footer-container">
            <div className="mds-footer-img-wrapper">
                <img src="/assets/images/footer.webp" className="w-full" alt="footer image" />
            </div>
            <div className="mds-footer-links-wrapper">
                <div className="mds-footer-col-first">
                    <h2 className="mds-footer-tile">About Us</h2>
                    <p>{aboutUs}</p>
                    <div className="mds-social-media-list">{getSocialImages()}</div>
                </div>
                <div className="mds-footer-col-second">
                    <div className="mds-footer-col-second-wrapper">
                        <div className="mds-footer-col-infodetails">
                            <h2 className="mds-footer-tile">Information</h2>
                            <ul>{getFooterDetails(footerInformation, 'information')}</ul>
                        </div>
                        <div className="mds-footer-col-accountdetails">
                            <h2 className="mds-footer-tile">ACCOUNT</h2>
                            <ul>{getFooterDetails(footerAccount, 'account')}</ul>
                        </div>
                        <div className="mds-footer-col-storedetails">
                            <h2 className="mds-footer-tile">Store</h2>
                            <ul>{getFooterDetails(storeDetails, 'store')}</ul>
                        </div>
                    </div>
                </div>
                <div className="mds-footer-col-third">
                    <h2 className="mds-footer-tile">CONTACT US</h2>
                    <p>
                        If you have any query, please contact us{' '}
                        <a href="maito:needus24@gmail.com">needus24@gmail.com</a>{' '}
                    </p>
                    <div className="mds-contact-details-wrapper">
                        <div className="mds-location-details">
                            <img src="/assets/images/location.webp" alt="location icon" />
                            <span>California, USA</span>
                        </div>
                        <div className="mds-phone-details">
                            <img src="/assets/images/phone.webp" alt="phone icon" />
                            <span>+12012987481</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mds-container">
                <div className="mds-divider"></div>
            </div>

            <div className="mds-container text-center mds-container-bottom">
                <div className="mds-payment-list-wrapper">{paymentOptionsImages()}</div>
                <div className="mds-copyright-text">
                    Copyright.
                    {new Date().getFullYear()}.
                    All Right Reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;
