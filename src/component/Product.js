import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import loader from "../App.css"
import Loader from "../Loader"
const Product = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [product, setProducts] = useState([])
    let {id} = useParams()
    useEffect(() => {
        async function getProduct() {
            setIsLoading(true)
            
            const url = `https://fakestoreapi.com/products/${id}`
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)
            // console.log("useEffect runs Twice on mount. To remove delete </React.StrictMode> from index.js")
            setProducts(data)
            setIsLoading(false)
        }
        getProduct()
    }, [])
  return (
    <>
      {!isLoading 
        ? <div>{product.title}</div>
        : <Loader />
      }
    </>
  )
}

export default Product