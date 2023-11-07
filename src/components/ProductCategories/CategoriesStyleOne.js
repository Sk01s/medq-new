import React from "react";
import Link from "next/link";

const CategoriesStyleOne = () => {
  return (
    <div className="banner-categories-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="single-banner-categories-box">
              <img
                src="/img/banner-categories/banner-categories-img1.jpg"
                alt="image"
              />

              <div className="content">
                <span className="sub-title">Temperature</span>
                <h3>
                  <Link href="/">Ear Thermometers</Link>
                </h3>
                <div className="btn-box">
                  <div className="d-flex align-items-center">
                    <Link href="/shop" className="default-btn">
                      <i className="flaticon-trolley"></i> Shop Now
                    </Link>
                    <span className="price">$49.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="single-banner-categories-box">
              <img
                src="/img/banner-categories/banner-categories-img2.jpg"
                alt="image"
              />

              <div className="content">
                <span className="sub-title">Personal</span>
                <h3>
                  <Link href="/">Favorite Collection</Link>
                </h3>
                <div className="btn-box">
                  <div className="d-flex align-items-center">
                    <Link href="/shop" className="default-btn">
                      <i className="flaticon-trolley"></i> Shop Now
                    </Link>
                    <span className="price">$69.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesStyleOne;
