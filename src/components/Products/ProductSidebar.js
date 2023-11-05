"use client";
import React from "react";
import Link from "next/link";
// import Router from "next/router";
// import { useRouter } from "next/navigation";

const ProductSidebar = () => {
  //   const router = useRouter();
  //   const { term } = router.query;

  //   const typeHandler = (term) => {
  //     Router.push({
  //       pathname: "/products",
  //       query: { term: term },
  //     });
  //   };

  return (
    <div className="woocommerce-widget-area">
      <div className="woocommerce-widget color-list-widget">
        <h3 className="woocommerce-widget-title">Color</h3>

        <ul className="color-list-row">
          <li className="active">
            <Link href="#" title="Black" className="color-black"></Link>
          </li>
          <li>
            <Link href="#" title="Red" className="color-red"></Link>
          </li>
          <li>
            <Link href="#" title="Yellow" className="color-yellow"></Link>
          </li>
          <li>
            <Link href="#" title="White" className="color-white"></Link>
          </li>
          <li>
            <Link href="#" title="Blue" className="color-blue"></Link>
          </li>
          <li>
            <Link href="#" title="Green" className="color-green"></Link>
          </li>
          <li>
            <Link
              href="#"
              title="Yellow Green"
              className="color-yellowgreen"
            ></Link>
          </li>
          <li>
            <Link href="#" title="Pink" className="color-pink"></Link>
          </li>
          <li>
            <Link href="#" title="Violet" className="color-violet"></Link>
          </li>
          <li>
            <Link
              href="#"
              title="Blue Violet"
              className="color-blueviolet"
            ></Link>
          </li>
          <li>
            <Link href="#" title="Lime" className="color-lime"></Link>
          </li>
          <li>
            <Link href="#" title="Plum" className="color-plum"></Link>
          </li>
          <li>
            <Link href="#" title="Teal" className="color-teal"></Link>
          </li>
        </ul>
      </div>

      <div className="woocommerce-widget brands-list-widget">
        <h3 className="woocommerce-widget-title">Category</h3>

        <ul className="brands-list-row">
          <li className={`active`}>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                typeHandler("medical");
              }}
            >
              Medical Equipment
            </Link>
          </li>
          <li className={`active `}>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                typeHandler("jewelry");
              }}
            >
              Jewelry
            </Link>
          </li>
          <li className={`active`}>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                typeHandler("electronics");
              }}
            >
              Electronics
            </Link>
          </li>
          <li className={`active`}>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                typeHandler("furniture");
              }}
            >
              Furniture
            </Link>
          </li>
          <li className={`active`}>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                typeHandler("fashion");
              }}
            >
              Fashion
            </Link>
          </li>
          <li className={`active`}>
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                typeHandler("grocery");
              }}
            >
              Grocery
            </Link>
          </li>
        </ul>
      </div>

      <div className="woocommerce-widget woocommerce-ads-widget">
        <img src="/img/ads.jpg" alt="image" />

        <div className="content">
          <span>New Arrivals</span>
          <h3>Modern Electronic Thermometer</h3>

          <Link href="#" className="default-btn">
            <i className="flaticon-trolley"></i> Shop Now
          </Link>
        </div>

        <Link href="#" className="link-btn"></Link>
      </div>

      <div className="woocommerce-widget best-seller-widget">
        <h3 className="woocommerce-widget-title">Best Seller</h3>

        <article className="item">
          <Link href="#" className="thumb">
            <span className="fullimage cover bg1" role="img"></span>
          </Link>
          <div className="info">
            <h4 className="title usmall">
              <Link href="#">Thermometer Gun</Link>
            </h4>
            <span>$99.00</span>
            <div className="rating">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
            </div>
          </div>
          <div className="clear"></div>
        </article>

        <article className="item">
          <Link href="#" className="thumb">
            <span className="fullimage cover bg2" role="img"></span>
          </Link>
          <div className="info">
            <h4 className="title usmall">
              <Link href="#">Protective Gloves</Link>
            </h4>
            <span>$65.00</span>
            <div className="rating">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
          </div>
          <div className="clear"></div>
        </article>

        <article className="item">
          <Link href="#" className="thumb">
            <span className="fullimage cover bg3" role="img"></span>
          </Link>
          <div className="info">
            <h4 className="title usmall">
              <Link href="#">Cosmetic Container</Link>
            </h4>

            <span>$139.00</span>
            <div className="rating">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bx-star"></i>
            </div>
          </div>
          <div className="clear"></div>
        </article>
      </div>
    </div>
  );
};

export default ProductSidebar;
