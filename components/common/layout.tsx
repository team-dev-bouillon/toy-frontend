import React from 'react';
import Header from './header';

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <footer></footer>
        </>
    );
};

export default Layout;
