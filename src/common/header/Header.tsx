import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import SearchBar from '../searchbar/SearchBar';
import Navbar from '../navbar/Navbar';
import SideBar from '../sideBar/SideBar';
import { Option } from '../../types/optionTypes';
import { categoryOptions, sidebarOptions } from '../../constants/constants';
import { useAppSelector, AppState } from './../../store/configureStore';
interface IHeader {
    setCurrentHeader: React.Dispatch<React.SetStateAction<any>>;
}

const Header: React.FC<IHeader> = ({ setCurrentHeader }) => {
    const cartCount = useAppSelector((state: AppState) => state.appProduct.inCartQty);
    const [open, setOpen] = useState<boolean>(false);
    const [filterData, setFilterData] = useState<any[]>([]);
    const [filter, setFilter] = useState<string>('');

    // Function to render the different Categories
    const renderSearchFilterOption = () => {
        return categoryOptions.map((option: Option, index: number) => (
            <option value={option.value} key={`filteroption-${index}`}>
                {option.text}
            </option>
        ));
    };

    return (
        <header className="mds-header">
            <div className="mds-container">
                <div className="mds-header-row">
                    <div className="mds-menu-left-details">
                        <div className="navbar d-block d-xl-none">
                            <a href="#" id="toggle-sidebar-res">
                                <div className="bar-style">
                                    <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                                </div>
                            </a>
                        </div>
                        <div className="brand-logo">
                            <a href="#">
                                <img src='/assets/images/logo.webp' className="logo-img" alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="mds-search-middle-details">
                        <div className="mds-header-middle-wrapper">
                            <form role="form">
                                <div className="mds-form">
                                    <SearchBar data={filterData} setFilter={setFilter} />
                                    <div className="mds-all-categroies-data">
                                        <select defaultValue='all' className="w-full text-black-900 bg-white">
                                            {renderSearchFilterOption()}
                                        </select>
                                    </div>
                                    <button className="mdc-button mdc-button--raised mds-btn-search">
                                            <SearchIcon/>


                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mds-right-details">
                        <div className="mds-loginRegister-details">
                            <a href="#">Login</a>
                            <span className="mds-separtor">|</span>
                            <a href="#">Signup</a>
                        </div>
                        <div className="mds-addtocard-and-wishlist">
                            <div className="mds-search-wrapper mr-10">
                                <img src='/assets/images/search-icon.webp' alt="search" />
                            </div>
                            <div className="mds-profile-wrapper mr-10">
                                <img src='/assets/images/profile.webp' alt="profile" />
                            </div>
                            <div className="mds-wishlist-wrapper mr-10">
                                <img src='/assets/images/heart.webp' alt="wishlist" />
                            </div>
                            <div className="mds-cart-wrapper">
                                <a href="#">
                                    <img src='/assets/images/cart.webp' alt="cart icon" />
                                    <div className="mds-badge">{cartCount}</div>
                                </a>
                            </div>
                            <div className="mds-humburger-wrapper">
                                <img onClick={() => setOpen(true)} src='/assets/images/menu-icon.webp' width={24} height={24} alt="menu icon" />
                                <SideBar setCurrentHeader={setCurrentHeader} anchor={'right'} list={sidebarOptions} open={open} setOpen={setOpen} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar setCurrentHeader={setCurrentHeader} />
        </header>
    );
};

export default Header;
