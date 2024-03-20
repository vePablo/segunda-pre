import './products.css';
import { useEffect, useState } from "react";
import { fetchProducts } from "../../asyncMock";
import { useNavigate } from 'react-router-dom';


const Products =() => {
    const navigate = useNavigate();
    const [productsList, setProductList] = useState([]);
    useEffect(()=> {
        fetchProducts.then((data) => {
            setProductList(data);
            console.log(data); 
        });
    }, []);

    const handleClick = (id) => {
        console.log("ID del producto:", id);
        navigate(`/products/${id}`);
      }
    
    return (
        <section>
            <h2>Todos los productos</h2>
            <div className="contenedor">
                <div className="cards-contenedor">
                {productsList.map(product => (
                    <div key={product.id} className="card">
                        <img src={product.image} alt={product.title} />
                        <div className="card-body">
                            <h4 className="card-title">{product.title}</h4>
                            <p className="card-description">{product.description}</p>
                            <p className="card-price">${product.price}</p>
                            <button onClick={()=> handleClick(product.id)} className='card-btn btn'>Leer mas</button>
                        </div>
                    </div>

                ))}
                    
                </div>
            </div>
        </section>
    )
};
export default Products;