import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="pt-20 pb-12">
      {/* define grid system */}
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* first part */}
        <div>
          <h1 className="text-[25px] uppercase font-semibold text-black mb-4">
            NRN Shop
          </h1>
          <p className="text-sm text-black opacity-60">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            ipsa vel incidunt saepe fugit maiores eaque totam hic harum
            aspernatur.
          </p>
          <p className="text-base mt-6 text-black opacity-80">
            (+00) 1234 5678 90 - info@example.com
          </p>
        </div>
        {/* 2nd part */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Information</h1>
          <p className="footer_link">About us</p>
          <p className="footer_link">Privacy police</p>
          <p className="footer_link">Return police</p>
          <p className="footer_link">Shipping police</p>
          <p className="footer_link">Drop shipping</p>
        </div>
        {/* 3rd part */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Account</h1>
          <p className="footer_link">Dashbord</p>
          <p className="footer_link">My Orders</p>
          <p className="footer_link">Account Details</p>
          <p className="footer_link">Track Orders</p>
        </div>
        {/* 4th part */}
        <div className="lg:mx-auto">
          <h1 className="footer_title">Shop</h1>
          <p className="footer_link">Affiliate</p>
          <p className="footer_link">Best sellers</p>
          <p className="footer_link">Latest Products</p>
          <p className="footer_link">Sale Products</p>
        </div>
      </div>
      {/* copyright */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60">
          copyright @{new Date().getFullYear()} NRNWarriors.
        </p>
        <Image
          src="/images/pay.svg"
          alt="pay"
          width={230}
          height={230}
          className="object-contain sm:mx-auto"
        />
      </div>
    </div>
  );
};

export default Footer;
