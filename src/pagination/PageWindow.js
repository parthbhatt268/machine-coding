import { useEffect, useState } from "react";
import './Pagewindow.css'

const Card = ({ title, image }) => {

    return (
        <div className="card">
            <img className="cardImage" src={image} alt='abc' />
            <span>{title}</span>
        </div>
    )
}


export const PageWindow = () => {

    const [products, setProducts] = useState([])
    const PAZE_SIZE = 10;
    const totalPage = products.length;
    const noOfPages = Math.ceil(totalPage / PAZE_SIZE);

    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products')
        const json = await data.json()
        // json.product
        console.log('📌 | PageWindow.js | json.product:', json.products);
        setProducts(json.products)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return !products.length ? <h1>No products found</h1> : (
        <>
            <div className="heading">
                Pagination
            </div>
            <div className="page-number-container">
                <div>
                    <span>right</span>
                </div>
                <div className="pageNo">
                    {[...Array(10).keys()].map(item =>
                        <span className="page-number">{item}</span>)}
                </div>
            </div>
            <div className="cardWrapper">
                {products.map(item => (
                    <Card
                        key={item.id}
                        title={item.title}
                        image={item.thumbnail}
                    />
                ))}
            </div>
        </>
    );
}