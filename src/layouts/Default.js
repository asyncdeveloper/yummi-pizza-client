import React from "react";
import {Alert, Col} from "shards-react";
import MainNavbar from "../components/common/MainNavbar";
import Footer from "../components/common/Footer";

export const DefaultLayout = ({ children, errorMessage }) => (
    <div style={{
        position: 'relative',
        minHeight: '100vh'
    }}>
        <MainNavbar />

        { errorMessage ?
            (
                <Col lg={{ size: 8, offset: 2 }}>
                    <Alert theme="danger">{ errorMessage } </Alert>
                </Col>
            ) : null
        }

        { children }

        <Footer />
    </div>
);

export default DefaultLayout;
