import React from 'react';
import './Breadcrumb.css';

interface IBreadcrumb {
    header: string;
    currentRoute: string;
}

const Breadcrumb: React.FC<IBreadcrumb> = ({ header, currentRoute }) => {
    return (
        <div className="mds-banner-wrapper">
            <h3 className="mds-banner-title">{header}</h3>
            <p className="mds-banner-breadcrumb">{currentRoute.replace(/\//g, ' / ')}</p>
        </div>
    );
};

export default Breadcrumb;
