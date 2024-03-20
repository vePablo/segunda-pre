
import './Product.css';
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../asyncMock";
import { useEffect, useState } from "react";

const Product = () =>{
    const {prodId} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        console.log("ID recibido:", prodId);
        setProduct(fetchProduct(prodId))
    }, [prodId]);
    
    return(
        <>
        <section>
            <div className="product-contenedor">
                <div className="product-img">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="product-detail">
                    <h3>{product.title}</h3>
                    <p> {product.description} </p>
                    <p> {product.price}</p>
                    <button>Comprar</button>
                </div>

            </div>
        </section>
        
        </>
    )
};
export default Product;