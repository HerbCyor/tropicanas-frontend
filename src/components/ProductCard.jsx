/* eslint-disable react/prop-types */

import { Card } from "react-bootstrap";
import { useState } from "react"
import { Button } from "react-bootstrap";
export function ProductCard({ id, name, price, description, imgUrl }) {
    const [quantity, setQuantity] = useState(1)
    // const { getItemQuantity, addItemToCart, removeItemFromCart, getCartItems } = useShoppingCart()

    const handleOnChange = (e) => {
        setQuantity(e.target.value)
    }
    const handleSubtractOne = () => {
        setQuantity(quantity == 1 ? 1 : quantity - 1)
    }

    const handleAddOne = () => {
        setQuantity(quantity + 1)
    }

    const handleAddButton = () => {
        //     addItemToCart(id, quantity)
        //     console.log(getCartItems())
    }
    return (
        <>
            <Card style={{ width: "18rem", margin: ".8rem", border: 'none' }}>
                <Card.Img variant="top" src={imgUrl} style={{ width: "16rem", height: "13rem" }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                </Card.Body>
                <Card.Body style={{}}>
                    <Button onClick={handleSubtractOne}>-</Button>
                    <input style={{ width: "2.5rem" }} type="text" onChange={handleOnChange} value={quantity} />
                    <Button onClick={handleAddOne}>+</Button>
                    <Button onClick={handleAddButton}>ADICIONAR</Button>
                </Card.Body>
            </Card>


        </>
    )
}