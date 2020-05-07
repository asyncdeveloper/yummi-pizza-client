import React from "react";
import {Alert, Col} from "shards-react";
import MainNavbar from "../components/common/MainNavbar";
import Footer from "../components/common/Footer";
import {connect} from "react-redux";

const DefaultLayout = ({ children, errorMessage }) => (
    <div style={{
        position: 'relative',
        minHeight: '100vh',
        paddingBottom: '100px'
    }}>
        <MainNavbar />

        { errorMessage ?
            (
                <Col lg={{ size: 8, offset: 2 }} className="pt-2 pb-2">
                    <Alert theme="danger">{ errorMessage } </Alert>
                </Col>
            ) : null
        }

        { children }

        <Footer />
    </div>
);

const mapStateToProps = (state) => {
    return {
        errorMessage: state.home.errorMessage,
    }
};

export default connect(mapStateToProps)(DefaultLayout)
