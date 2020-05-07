import React from "react";
import {Button} from "shards-react";

const SpinnerButton = () => (
    <div className="loader text-center">
        <Button outline disabled pill theme="dark" size="lg">
            <i className="fa fa-spinner fa-spin" />
        </Button>
    </div>
);

export default SpinnerButton;
