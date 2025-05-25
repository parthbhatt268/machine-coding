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

    const [products, setProducts] = useState([]) // See I have kept here array so while setProduct use arrya only
    const [activePage, setActivePage] = useState(0)

    const PAZE_SIZE = 5;
    const totalPage = products.length;
    const noOfPages = Math.ceil(totalPage / PAZE_SIZE);
    const start = activePage * PAZE_SIZE
    const end = start + PAZE_SIZE

    //---- Rerender on fresh load----//
    useEffect(() => {
        fetchData()
    }, [])


    // ---- Fetching Data -----//
    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products')
        const json = await data.json()
        console.log('📌 | PageWindow.js | json.product:', json.products);
        setProducts(json.products)
    }

    // ----Mehtod----//
    const handlePageChnage = (n) => {
        setActivePage(n)
    }

    const gotToPrevPage = () => {
        setActivePage((prev) => prev - 1)
    }

    const gotToNextPage = () => {
        setActivePage((prev) => prev + 1)
    }

    return !products.length ? <h1>No products found</h1> : (
        <>
            <div className="heading">
                Pagination
            </div>

            <div className="page-number-container">

                <button
                    disabled={activePage === 0}
                    className="page-number"
                    onClick={() => gotToPrevPage()}
                >
                    left
                </button>

                <span className="pageNo">
                    {[...Array(noOfPages).keys()].map(item =>
                        <button
                            key={item}
                            className={"page-number " + (item === activePage ? 'active' : '')}
                            onClick={() => handlePageChnage(item)}
                        >
                            {item}
                        </button>
                    )}
                </span>

                <button
                    disabled={activePage === noOfPages - 1}
                    className="page-number"
                    onClick={() => gotToNextPage()}
                >
                    right
                </button>
            </div>

            <div className="cardWrapper">
                {products.slice(start, end).map(item => (
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