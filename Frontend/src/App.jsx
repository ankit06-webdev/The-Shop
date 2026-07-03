import { useState, useEffect } from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FcShop } from "react-icons/fc";

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
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-900 p-4 md:px-8 gap-4 shadow-md">
        <div className="name text-white flex items-center gap-3 text-2xl font-bold tracking-wide">
          <FcShop className="text-3xl" /> THE SHOP
        </div>
        <div className="links flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm md:text-base">
          <a href="#" className="text-white hover:text-blue-300 transition-colors flex items-center gap-2"><IoHomeOutline /> Home</a>
          <a href="#" className="text-white hover:text-blue-300 transition-colors flex items-center gap-2"><AiOutlineProduct /> Products</a>
          <a href="#" className="text-white hover:text-blue-300 transition-colors flex items-center gap-2"><IoCartOutline /> Cart</a>
          <a href="#" className="text-white hover:text-blue-300 transition-colors flex items-center gap-2"><FiPhone /> Contact</a>
        </div>
      </div>
      
      <div className="relative w-full max-w-3xl mx-auto my-6 px-4 md:px-0">
        <div className="absolute inset-y-0 left-4 md:left-0 flex items-center pl-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>  
        </div>
        <input
          type="text"
          className="block w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-full bg-white shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all"
          placeholder="Search for daily needs, groceries, FMCG..."
        />
        <button
          type="button"
          className="absolute right-6 md:right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full text-sm px-4 md:px-6 transition-colors"
        >
          Search
        </button>
      </div>

      <div className="px-4 text-center text-gray-700 text-base md:text-lg font-medium mb-4">
        Welcome to The Shop! Explore our wide range of products and enjoy seamless shopping.
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-6 p-2 md:p-8 flex-grow">
        {products.map((product) => (
          <div key={product._id} className="ProductCard bg-white shadow-sm hover:shadow-xl transition-shadow rounded-lg p-2 md:p-4 flex flex-col w-full mx-auto">
            <div className="img h-20 md:h-48 w-full bg-white flex justify-center items-center mb-2 md:mb-4 rounded-md overflow-hidden">
              <img src={product.imageUrl} alt={product.name} className="h-full w-full object-contain p-1 md:p-2 hover:scale-105 transition-transform duration-300" />
            </div>
            
            <div className="productDetails flex flex-col flex-grow justify-between gap-1 md:gap-2">
              <div className="name font-semibold text-gray-800 text-[11px] md:text-lg leading-tight line-clamp-2">
                {product.name}
              </div>
              
              <div className="flex flex-col md:flex-row gap-0 md:gap-3 items-start md:items-center mt-1">
                <div className="Price text-xs md:text-xl font-bold text-blue-700">₹{product.wholesalePrice}</div>
                <div className="MRPPrice line-through text-gray-400 text-[9px] md:text-sm">₹{product.mrp}</div>
              </div>
              
              {product.stock > 0 ? (
                <button className="w-full bg-blue-600 text-white py-1 md:py-2.5 rounded md:rounded-lg mt-1 md:mt-3 hover:bg-blue-700 transition-colors text-[10px] md:text-base font-semibold shadow-sm">
                  <span className="md:hidden">Add</span>
                  <span className="hidden md:inline">Add to Cart</span>
                </button>
              ) : (
                <button
                  disabled
                  className="w-full bg-red-100 text-red-600 py-1 md:py-2.5 rounded md:rounded-lg mt-1 md:mt-3 cursor-not-allowed text-[10px] md:text-base font-semibold border border-red-200"
                >
                   <span className="md:hidden">Out</span>
                   <span className="hidden md:inline">Out of Stock</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-900 text-blue-100 p-4 text-center text-sm md:text-base mt-auto">
        &copy; 2026 The Shop. All rights reserved.
      </div>
    </div>
  )
}

export default App