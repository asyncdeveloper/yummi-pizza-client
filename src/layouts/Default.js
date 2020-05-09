import React from "react";
import MainNavbar from "../components/common/MainNavbar";
import Footer from "../components/common/Footer";

const DefaultLayout = ({ children }) => (
    <div style={{
        position: 'relative',
        minHeight: '100vh',
        paddingBottom: '100px'
    }}>
        <MainNavbar />

        { children }

        <Footer />
    </div>
);


export default DefaultLayout;
