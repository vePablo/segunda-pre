
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../asyncMock';
import { useNavigate } from 'react-router-dom';

const Cuadernos = () => {
  const navigate = useNavigate();
  const [cuadernos, setCuadernos] = useState([]);

  useEffect(() => {
    fetchProducts.then(data => {

      const cuadernosData = data.filter(product => product.category === 'Cuadernos');
      setCuadernos(cuadernosData);
    });
  }, []);

  const handleClick = (id) => {
    console.log("ID del producto:", id);
    navigate(`/products/${id}`);
  }

  return (
    <section>
      <h2>Cuadernos</h2>
      <div className="contenedor">
        <div className="cards-contenedor">
          {cuadernos.map(product => (
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

export default Cuadernos;
