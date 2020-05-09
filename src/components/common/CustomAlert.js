import React, {Fragment} from "react";
import {Alert, Col} from "shards-react";

const CustomAlert = ({ errorMessage, successMessage }) => {
    return (
        <Fragment>
            {errorMessage ?
                (
                    <Col lg={{size: 8, offset: 2}} className="pt-2 pb-2">
                        <Alert theme="danger">{errorMessage} </Alert>
                    </Col>
                ) : null
            }

            {successMessage ?
                (
                    <Col lg={{size: 8, offset: 2}} className="pt-2 pb-2">
                        <Alert theme="success">{successMessage} </Alert>
                    </Col>
                ) : null
            }
        </Fragment>
    );
};

export default CustomAlert;
