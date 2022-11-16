import React from 'react';
import Header, { MenuType } from './header';

interface Props {
    children: React.ReactNode;
    activeMenu?: MenuType;
}

const Layout = ({ children, activeMenu }: Props) => {
    return (
        <>
            <Header active={activeMenu} />
            <main>{children}</main>
            <footer></footer>
        </>
    );
};

export default Layout;
