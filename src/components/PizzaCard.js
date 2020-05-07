import React from "react";
import {Badge, Button, Card, CardBody, CardFooter, CardHeader, CardImg} from "shards-react";

export const PizzaCard = ({ name, description, price }) => {
    return (
        <Card className="box" style={{maxWidth: "300px"}}>
            <CardHeader>
                {name}
            </CardHeader>
            <CardImg src="https://place-hold.it/300x200"/>
            <CardBody>
                <p>{description}</p>
                <Badge>${ price }</Badge>
            </CardBody>
            <CardFooter>
                <Button outline pill theme="dark">
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
};
