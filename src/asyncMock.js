// asyncMock.js

const products = [
    {
      id: 1,
      title: 'Remera 1',
      price: '1000',
      category: 'Remeras',
      description: 'Remera con diseño personalizado',
      image: `/img/remeras/remera-1.jpg`, 
    },
    {
      id: 2,
      title: 'Remera 2',
      price: '1000',
      category: 'Remeras',
      description: 'Remera con diseño personalizado',
      image: `/img/remeras/remera-2.jpg`, 
    },
    {
      id: 3,
      title: 'Remera 3',
      price: '1000',
      category: 'Remeras',
      description: 'Remera con diseño personalizado',
      image: `/img/remeras/remera-3.jpg`, 
    },
    {
      id: 4,
      title: 'Remera 4',
      price: '1000',
      category: 'Remeras',
      description: 'Remera con diseño personalizado',
      image: `/img/remeras/remera-4.jpg`, 
    },
    {
      id: 5,
      title: 'Remera 5',
      price: '1000',
      category: 'Remeras',
      description: 'Remera con diseño personalizado',
      image: `/img/remeras/remera-5.jpg`, 
    },
    {
      id: 6,
      title: 'Remera 6',
      price: '1000',
      category: 'Remeras',
      description: 'Remera con diseño personalizado',
      image: `/img/remeras/remera-6.jpg`, 
    },
    {
      id: 7,
      title: 'Remera 7',
      price: '1000',
      category: 'Remeras',
      description: 'Remera con diseño personalizado',
      image: `/img/remeras/remera-7.jpg`, 
    },
    
    //-Cuadernos--/
    {
        id: 8,
        title: 'Cuaderno 1',
        price: '2000',
        category: 'Cuadernos',
        description: 'Cuadernos personalizadas',
        image: `/img/Cuadernos/cuaderno-1.jpg`,
      },
      {
        id: 9,
        title: 'Cuaderno 2',
        price: '2000',
        category: 'Cuadernos',
        description: 'Cuadernos personalizadas',
        image: `/img/Cuadernos/cuaderno-2.jpg`,
      },
      {
        id: 10,
        title: 'Cuaderno 3',
        price: '2000',
        category: 'Cuaderno',
        description: 'Cuadernos personalizadas',
        image: `/img/Cuadernos/cuaderno-3.jpg`,
      },
      {
        id: 11,
        title: 'Cuaderno 4',
        price: '2000',
        category: 'Cuadernos',
        description: 'Cuadernos personalizadas',
        image: `/img/Cuadernos/cuaderno-4.jpg`,
      },
      {
        id: 12,
        title: 'Cuaderno 5',
        price: '2000',
        category: 'Cuadernos',
        description: 'Cuadernos personalizadas',
        image: `/img/Cuadernos/cuaderno-5.jpg`,
      },
      {
        id: 13,
        title: 'Cuaderno 6',
        price: '2000',
        category: 'Cuadernos',
        description: 'Cuadernos personalizadas',
        image: `/img/Cuadernos/cuaderno-6.jpg`,
      },
      {
        id: 14,
        title: 'Cuaderno 7',
        price: '2000',
        category: 'Cuadernos',
        description: 'Cuadernos personalizadas',
        image: `/img/Cuadernos/cuaderno-7.jpg`,
      },
  ];
  
export const fetchProducts = new Promise((resolve) => {
    setTimeout(() => {
        resolve(products)
    },2000)
});

export const fetchProduct = (id) => {
  return products.find((prod) => prod.id == id);
};
  