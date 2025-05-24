import { useEffect } from "react";

export const PageWindow = () => {


    const fetchData = async () => {
        const data = await fetch('https://dummyjson.com/products')
        const json = await data.json()
        // json.product
        console.log('📌 | PageWindow.js | json.product:', json.products);
    }
    useEffect(() => {
        fetchData()
    },[])

    return (
        <>
            Page
        </>
    );
}