import { useEffect, useState } from "react"
import database from "../../data/products.json"
import { ProductCard } from "../../components/ProductCard"
import { Container, Row } from "react-bootstrap"

export function CongeladosPage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(database.products.filter(item => item.section == "congelados"))
    }, [])

    return (
        <>
            Confeitaria
            <Container>
                <Row>
                    {
                        products.map(item => {
                            return (
                                <>
                                    <ProductCard
                                        key={item.id}
                                        id={item.id}
                                        name={item.name}
                                        description={item.description}
                                        price={item.price}
                                        imgUrl={item.imgUrl} />
                                </>
                            )

                        })}
                </Row>
            </Container>
        </>
    )
}