import React from "react";
import {Badge, Button, Card, CardBody, CardHeader, CardImg} from "shards-react";

export const PizzaCard = (props) => {
    const { id, name, description, price, image_url, inCart } = props;

    return (
        <Card className="box" style={{maxWidth: "300px"}}>
            <CardHeader> {name} </CardHeader>
            <CardImg src={image_url} />
            <CardBody>
                <p>{description}</p>
                <Badge className="mt-1">${ price }</Badge>
                {
                    inCart ? (
                        <Button pill size="sm" theme="dark" style={{ float: 'right' }} onClick={ e => props.removeFromCart(id) }>
                            Remove From Cart
                        </Button>
                    ):
                    (
                        <Button outline pill size="sm" theme="success" style={{ float: 'right' }} onClick={ e => props.addToCart(id) }>
                            Add to Cart
                        </Button>
                    )
                }

            </CardBody>
        </Card>
    );
};
