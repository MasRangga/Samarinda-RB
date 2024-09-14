import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";

// GambarProduk
import Loa1 from "../../images/Produkkk/Loa1.jpeg"
import Loa2 from "../../images/Produkkk/Loa2.jpeg"
import Loa3 from "../../images/Produkkk/Loa3.jpeg"
import Loa4 from "../../images/Produkkk/Loa4.jpeg"
import Loa5 from "../../images/Produkkk/Loa5.jpeg"
import Loa6 from "../../images/Produkkk/Loa6.jpeg"
import Loa7 from "../../images/Produkkk/Loa7.jpeg"

const products = [
  {
    id: 1,
    name: "Madu Mellifera",
    image: Loa1,
    detailImg: Loa1,
    description:
      "High-quality men's T-shirt made from 100% cotton. Comfortable and perfect for everyday wear.",
    price: "Rp 135.000",
    whatsappMessage:
      "Hello,%20selamat%20datang%20di%20Rumah%20BUMN%20Samarinda.%20Silahkan%20di%20order%20produk%20kami.",
  },
  {
    id: 2,
    name: "Madu Kelulut Borneo",
    image: Loa2,
    detailImg: Loa2,
    description:
      "Elegant women's dress made from lightweight fabric. Perfect for special occasions.",
    price: "Rp 240.000",
    whatsappMessage:
      "Hello,%20selamat%20datang%20di%20Rumah%20BUMN%20Samarinda.%20Silahkan%20di%20order%20produk%20kami.",
  },
  {
    id: 3,
    name: "Madu Borneo Hutan Liar",
    image: Loa3,
    detailImg: Loa3,
    description:
      "Premium leather wallet with multiple compartments for cards and cash.",
    price: "Rp 125.000",
    whatsappMessage:
      "Hello,%20selamat%20datang%20di%20Rumah%20BUMN%20Samarinda.%20Silahkan%20di%20order%20produk%20kami.",
  },
  {
    id: 4,
    name: "Madu Borneo Hutan Liar",
    image: Loa4,
    detailImg: Loa4,
    description:
      "Comfortable running shoes with breathable material and good cushioning.",
    price: "Rp 125.000",
    whatsappMessage:
      "Hello,%20selamat%20datang%20di%20Rumah%20BUMN%20Samarinda.%20Silahkan%20di%20order%20produk%20kami.",
  },
  {
    id: 5,
    name: "Madu Borneo Hutan Liar",
    image: Loa5,
    detailImg: Loa5,
    description:
      "Advanced smartwatch with fitness tracking and notification features.",
    price: "Rp 125.000",
    whatsappMessage:
      "Hello,%20selamat%20datang%20di%20Rumah%20BUMN%20Samarinda.%20Silahkan%20di%20order%20produk%20kami.",
  },
  {
    id: 6,
    name: "Madu Akasia",
    image: Loa6,
    detailImg: Loa6,
    description:
      "Stylish sunglasses with UV protection for a clear and safe vision.",
    price: "Rp 98.000",
    whatsappMessage:
      "Hello,%20selamat%20datang%20di%20Rumah%20BUMN%20Samarinda.%20Silahkan%20di%20order%20produk%20kami.",
  },
  {
    id: 7,
    name: "--",
    image: Loa7,
    detailImg: Loa7,
    description:
      "Durable backpack with multiple compartments for your daily needs.",
    price: "Rp ---",
    whatsappMessage:
      "Hello,%20selamat%20datang%20di%20Rumah%20BUMN%20Samarinda.%20Silahkan%20di%20order%20produk%20kami.",
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
        <div className="my-5">
          {/* Judul */}
          <div className="flex flex-col mx-5 my-10">
            <h2 className="text-primary font-semibold text-5xl">Produk UMKM</h2>
            <p className="text-base font-light text-slate-700 lg:text-lg">
              Produk UMKM Unggulan di Rumah BUMN Samarinda
            </p>
          </div>
          {/* end judul */}

          {/* Tabs */}

          {/* Card Produk */}
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-10 mx-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl hover:brightness-110 duration-300 bg-gradient-to-r from-red-600 via-red-500 to-orange-400"
              >
                {/* Image and overlay */}
                <div className="relative group">
                  <img
                    src={product.image}
                    className="rounded-tl-lg rounded-tr-lg w-full transition-transform transform group-hover:scale-105 duration-300"
                    alt={product.name}
                    style={{ maxHeight: "500px" }}
                  />

                  {/* Overlay for large screens */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:flex hidden">
                    <div className="text-white space-y-4">
                      <a
                        className="bg-gradient-to-r from-green-600 to-green-400 rounded-full py-2 px-4 text-sm text-white flex items-center space-x-2 transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
                        href={`https://wa.me/6285250803633?text=${product.whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaWhatsapp className="text-lg" />
                        <span>WhatsApp</span>
                      </a>
                      <button
                        className="bg-secondary rounded-full py-2 px-4 text-sm text-white flex items-center space-x-2 transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
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
                        <span>Lihat Detail</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">
                    <a href={product.link}>{product.name}</a>
                  </h3>
                  <p className="text-xl font-bold text-white my-2">
                    {product.price}
                  </p>
                  {/* Mobile buttons */}
                  <div className="block lg:hidden flex justify-between mt-4">
                    <a
                      className="bg-gradient-to-r from-green-600 to-green-400 rounded-full py-2 px-4 text-sm text-white flex items-center space-x-2 transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
                      href={`https://wa.me/6285250803633?text=${product.whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="text-lg" />
                      <span>WhatsApp</span>
                    </a>
                    <button
                      className="bg-secondary rounded-full py-2 px-4 text-sm text-white flex items-center space-x-2 transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
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
                      <span>Lihat Detail</span>
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
                      <p className="text-xl font-bold text-blue-600 mb-4">
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
                          <span>WhatsApp</span>
                        </a>

                        <button
                          onClick={closeModal}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
                        >
                          Kembali
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
