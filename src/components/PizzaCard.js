import React from "react";
import {Badge, Card, CardBody, CardImg, CardTitle} from "shards-react";

export const PizzaCard = ({ name, description, price }) => {
    return (
        <Card className="box" style={{maxWidth: "300px"}}>
            <CardImg src="https://place-hold.it/300x200"/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <p>{description}</p>
                <Badge>${ price }</Badge>
            </CardBody>
        </Card>
    );
};
