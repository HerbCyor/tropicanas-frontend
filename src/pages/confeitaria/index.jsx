import { useEffect, useState } from "react"
import database from "../../data/products.json"
import { ProductCard } from "../../components/ProductCard"

export function ConfeitariaPage() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(database.products.filter(item => item.section == "confeitaria"))
        console.log(database.products.filter(item => item.section == "confeitaria"))
    }, [])

    return (
        <>
            Confeitaria
            {
                products.map(item => {
                    return (
                        <>
                            <ProductCard key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} />
                        </>
                    )

                })}
        </>
    )
}