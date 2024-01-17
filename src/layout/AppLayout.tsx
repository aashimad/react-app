import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import store  from './../store/configureStore'
import { Provider } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom'

import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';

const AppLayout = () => {

  const [currentRoute, setCurrentRoute] = useState('HOME');
  const [currentHeader, setCurrentHeader] = useState('HOME');
  const currentLocation = useLocation();

  
  // hook to get current path on load
  useEffect(() => {
    if (currentLocation.pathname !== '/') {
        setCurrentRoute(`HOME${currentLocation.pathname.toUpperCase().replace(/_/g, ' ')}`);
    } else {
        setCurrentRoute('HOME');
    }
}, [currentLocation.pathname])

    return (
      <Provider store={store()}>
        <Header setCurrentHeader={setCurrentHeader} />
        <Breadcrumb currentRoute={currentRoute} header={currentHeader} />
        <Outlet />
        <Footer />
      </Provider>
    )
}

export default AppLayout;