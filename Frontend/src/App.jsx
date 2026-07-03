import { useState, useEffect } from 'react'

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const response = async () => {
      const res = await fetch('http://localhost:3000/api/products');
      const products = await res.json();
      setProducts(products);
      console.log(products[0]);
    }
    response();
  }, []);



  return (
    <>
      <div className="flex justify-center items-center bg-blue-500 text-3xl font-bold py-4">
        THE SHOP
      </div>
      <div className="flex w-full flex-wrap bg-blue-100">
        {products.map((product) => (

          <div key={product._id} className="ProductCard bg-white shadow-md rounded-lg p-4 m-4 w-50">
            <div className="img h-48 w-full bg-gray-200 flex justify-center items-center mb-4">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="productDetails h-32 flex flex-col justify-between">
              <div className="name">{product.name}</div>
              <div className="flex gap-2 items-center">
                <div className="MRPPrice line-through">₹{product.mrp}</div>
                <div className="Price">₹{product.wholesalePrice}</div>
              </div>
              {
                product.stock > 0 ? (
                  <button className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700 transition-colors font-medium">
                    Add to Cart
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-red-500 text-white py-2 px-4 rounded-md mt-4 cursor-not-allowed opacity-80 font-medium"
                  >
                    Out of Stock
                  </button>
                )
              }
            </div>
          </div>

        ))}
      </div>

    </>
  )
}

export default App
