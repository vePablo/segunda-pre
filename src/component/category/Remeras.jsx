
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../asyncMock';
import { useNavigate } from 'react-router-dom';

const Remeras = () => {
  const navigate = useNavigate();
  const [remeras, setRemeras] = useState([]);

  useEffect(() => {
    fetchProducts.then(data => {
      
      const remerasData = data.filter(product => product.category === 'Remeras');
      setRemeras(remerasData);
    });
  }, []);

  const handleClick = (id) => {
    console.log("ID del producto:", id);
    navigate(`/products/${id}`);
  }

  return (
    <section>
      <h2>Remeras</h2>
      <div className="contenedor">
        <div className="cards-contenedor">
          {remeras.map(product => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} />
              <div className="card-body">
                <h4 className="card-title">{product.title}</h4>
                <p className="card-description">{product.description}</p>
                <p className="card-price">${product.price}</p>
                <button onClick={() => handleClick(product.id)} className='card-btn btn'>Leer más</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Remeras;
