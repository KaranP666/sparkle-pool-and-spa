import React from "react";
import Bio from '../assets/partners/Bio-Dex.png'
import HASA from '../assets/partners/HASA.png'
import Hayward from '../assets/partners/Hayward.png'
import Jandy from '../assets/partners/Jandy.png'
import NaturalChemistry from '../assets/partners/NaturalChemistry.png'
import Pentair from '../assets/partners/Pentair.png'
import Raypak from '../assets/partners/Raypak.png'
import Orenda from '../assets/partners/Orenda.png'

const partners = [
  { name: "Bio", logo: Bio },
  { name: "HASA", logo: HASA },
  { name: "Hayward", logo: Hayward },
  { name: "Jandy", logo: Jandy},
  { name: "NaturalChemistry", logo: NaturalChemistry },
  { name: "Pentair", logo: Pentair },
  { name: "Raypak", logo: Raypak },
  { name: "Orenda", logo: Orenda },
];

const Footer = () => {
  return (
    <div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Partners
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We work with the best partners
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 rounded-lg shadow-md"
              >
                <img
                  className="max-h-12"
                  src={partner.logo}
                  alt={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
