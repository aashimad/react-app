import React, { useState, Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SideBar from '../sideBar/SideBar';
import { sidebarOptions } from '../../constants/constants';

interface INavbar {
    setCurrentHeader: Dispatch<SetStateAction<string>>;
}

const Navbar: React.FC<INavbar> = ({ setCurrentHeader }) => {
    const [open, setOpen] = useState<boolean>(false);
    const currentLocation = useLocation();

    return (
        <div className="mds-header-bottom">
            <div className="mds-container">
                <div className="mds-header-bottom-row">
                    <div className="mds-header-bottom-left">
                        <div className="mds-header-bottom-categroies">
                            <img
                                onClick={() => setOpen(true)}
                                src="/assets/images/menu-icon.webp"
                                alt="Menu Icon"
                                className="mr-20"
                            />
                            <SideBar
                                list={sidebarOptions}
                                open={open}
                                anchor={'left'}
                                setCurrentHeader={setCurrentHeader}
                                setOpen={setOpen}
                            />
                            <span onClick={() => setOpen(true)} className="mr-20">
                                All Categories
                            </span>
                            <img src="/assets/images/down-arrow-white.webp" alt="Down Arrow" />
                        </div>
                    </div>
                    <div className="mds-header-bottom-middle">
                        <nav className="mds-header-bottom-menus-center">
                            <ul className="mds-header-menus-list">
                                {sidebarOptions.map((item, index) => (
                                    <li
                                        key={item.name + index}
                                        className={
                                            currentLocation.pathname === item.path
                                                ? 'mds-header-menu mds-header-menu-active'
                                                : 'mds-header-menu'
                                        }
                                    >
                                        <Link to={item.path} onClick={() => setCurrentHeader(item.header)}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="mds-header-bottom-right">
                        <div className="mds-header-bottom-contact-details">
                            <img src="/assets/images/call-icon.webp" alt="Call Icon" />
                            <div className="mds-header-contactNumber">
                                <h6 className="mds-header-contactNumber-title">Contact Us 24/7</h6>
                                <p className="mds-header-contactNumber-description">+12012987481</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
