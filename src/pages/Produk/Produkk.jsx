import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Men's T-Shirt",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/9/8d195af5-8d10-43b3-b2af-bb2b15b90cba.jpg",
    detailImg:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/9/8d195af5-8d10-43b3-b2af-bb2b15b90cba.jpg",
    description:
      "High-quality men's T-shirt made from 100% cotton. Comfortable and perfect for everyday wear.",
    price: "Rp 150.000",
    whatsappMessage:
      "Hello,%20I'm%20interested%20in%20the%20Men's%20T-Shirt%20you%20have%20listed.",
  },
  {
    id: 2,
    name: "Women's T-Shirt",
    image:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/9/8d195af5-8d10-43b3-b2af-bb2b15b90cba.jpg",
    detailImg:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/9/8d195af5-8d10-43b3-b2af-bb2b15b90cba.jpg",
    description:
      "Stylish women's T-shirt made from breathable fabric. Available in various colors and sizes.",
    price: "Rp 120.000",
    whatsappMessage:
      "Hello,%20I'm%20interested%20in%20the%20Women's%20T-Shirt%20you%20have%20listed.",
  },
];

const Produkk = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-24 font-poppins">
        <div className="flex flex-col gap-4 items-start lg:gap-4">
          <h1 className="flex justify-center text-blue-500 font-semibold text-2xl lg:text-3xl">
            Produk UMKM Rumah BUMN Samarinda
          </h1>
        </div>

        {/* Card Produk */}
        <div className="my-14">
          <div className="flex flex-row justify-between my-5">
            <h2 className="text-3xl">Men's Collection</h2>
          </div>
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.map((product) => (
              <div key={product.id} className="shadow-lg rounded-lg">
                <img
                  src={product.image}
                  className="rounded-tl-lg rounded-tr-lg w-full"
                  alt={product.name}
                />

                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    <a href={product.link}>{product.name}</a>
                  </h3>
                  <div className="flex flex-col lg:flex-row justify-between">
                    <a
                      className="bg-gradient-to-r from-green-600 to-green-400 rounded-full py-2 px-6 my-2 text-sm text-white hover:bg-green-500 flex items-center space-x-2 transition-colors duration-300"
                      href={`https://wa.me/PHONE_NUMBER?text=${product.whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="text-lg" />
                      <span>WhatsApp</span>
                    </a>
                    <button
                      className="bg-purple-600 rounded-full py-2 px-4 my-2 text-sm text-white hover:bg-purple-700 flex flex-row justify-center"
                      onClick={() => openModal(product)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {modalIsOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div
                className="fixed inset-0 bg-black bg-opacity-50"
                onClick={closeModal}
              ></div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-2xl mx-auto relative z-10">
                {selectedProduct && (
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    {/* Image on the left */}
                    <div className="mb-4 md:mb-0 md:mr-6">
                      <img
                        src={selectedProduct.detailImg}
                        alt={selectedProduct.name}
                        className="w-full max-w-xs rounded-xl"
                        style={{ maxWidth: "200px", height: "auto" }}
                      />
                    </div>

                    {/* Content on the right */}
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold mb-4">
                        {selectedProduct.name}
                      </h2>
                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        {selectedProduct.description}
                      </p>
                      <p className="text-xl font-bold text-blue-500 mb-4">
                        {selectedProduct.price}
                      </p>

                      <div className="flex flex-row items-center justify-start space-x-4">
                        <a
                          href={`https://wa.me/PHONE_NUMBER?text=${selectedProduct.whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
                        >
                          <FaWhatsapp className="mr-2 text-2xl" />
                          <span>Order Via WhatsApp</span>
                        </a>

                        <button
                          onClick={closeModal}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Produkk;
