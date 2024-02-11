import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderClient from './headerClient';
import FooterClient from './footerClient';

function LayoutClient() {
    return (
        <React.Fragment>
            <HeaderClient />
            <Outlet />
            <FooterClient />
        </React.Fragment>
    )
}

export default LayoutClient