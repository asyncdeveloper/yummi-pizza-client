import React from "react";
import {Badge, Button, Card, CardBody, CardHeader, CardImg} from "shards-react";

export const PizzaCard = ({ name, description, price }) => {
    return (
        <Card className="box" style={{maxWidth: "300px"}}>
            <CardHeader>
                {name}
            </CardHeader>
            <CardImg src="https://place-hold.it/300x200"/>
            <CardBody>
                <p>{description}</p>
                <Badge className="mt-1">${ price }</Badge>
                <Button outline pill theme="dark" style={{ float: 'right' }}>
                    Add to Cart
                </Button>
            </CardBody>
        </Card>
    );
};
