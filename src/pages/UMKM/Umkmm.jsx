import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Loa1 from "../../images/Produkkk/Loa1.jpeg";
import Loa2 from "../../images/Produkkk/Loa2.jpeg"; // Tambahkan gambar kedua jika diperlukan
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaShoppingCart,
} from "react-icons/fa";
import CopyRight2 from "../../components/CopyRight/CopyRight2";

// Dummy data
const profiles = [
  {
    name: "Loa Honey",
    description: "Visit us on social media and explore our latest products.",
    socialLinks: {
      instagram: "https://instagram.com/yourprofile",
      whatsapp: "https://wa.me/yourphonenumber",
      facebook: "https://facebook.com/yourprofile",
      shopee: "https://shopee.com/yourshop",
    },
    image: Loa1, // Pastikan Loa1 diimpor dengan benar
  },
  {
    name: "Loa Second",
    description: "Explore more products from us on social media.",
    socialLinks: {
      instagram: "https://instagram.com/yourprofile2",
      whatsapp: "https://wa.me/yourphonenumber2",
      facebook: "https://facebook.com/yourprofile2",
      shopee: "https://shopee.com/yourshop2",
    },
    image: Loa2, // Pastikan Loa2 diimpor dengan benar
  },
];

const Umkmm = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-24 font-poppins">
        <div className="my-5">
          {/* Judul */}
          <div className="flex flex-col mx-5 my-10">
            <h2 className="text-primary font-semibold text-5xl">
              Profile UMKM
            </h2>
            <p className="text-lg font-light text-slate-700 lg:text-xl">
              Rumah BUMN Samarinda
            </p>
          </div>
          {/* End Judul */}

          {/* Card Profile UMKM */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-5">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="rounded-3xl shadow-lg p-6 w-full max-w-[900px] bg-white"
              >
                <div className="flex items-center space-x-6">
                  {/* Icon Sosmed */}
                  <div className="flex flex-col space-y-4">
                    <a
                      href={profile.socialLinks.instagram}
                      className="text-gray-600 hover:text-red-600"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href={profile.socialLinks.whatsapp}
                      className="text-gray-600 hover:text-red-600"
                    >
                      <FaWhatsapp size={24} />
                    </a>
                    <a
                      href={profile.socialLinks.facebook}
                      className="text-gray-600 hover:text-red-600"
                    >
                      <FaFacebookF size={24} />
                    </a>
                    <a
                      href={profile.socialLinks.shopee}
                      className="text-gray-600 hover:text-red-600"
                    >
                      <FaShoppingCart size={24} />
                    </a>
                  </div>
                  <div className="flex items-center space-x-6">
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className="w-40 h-40 object-cover rounded-full"
                    />
                    <div className="flex flex-col mb-4">
                      <div className="text-left">
                        <span className="font-thin text-lg">
                          {profile.name}
                        </span>
                      </div>
                      {/* Deskripsi */}
                      <div className="mt-4 text-left text-sm text-gray-600">
                        <p>{profile.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CopyRight2 />
    </>
  );
};

export default Umkmm;
