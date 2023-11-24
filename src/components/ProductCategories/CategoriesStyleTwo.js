import React from "react";
import Link from "next/link";

const CategoriesStyleTwo = () => {
  return (
    <div className="categories-area">
      <div className="container">
        <div className="section-title">
          <h2>Categories</h2>
        </div>

        <div className="row">
          <Link
            href="/category/medical-disposablet"
            className="col-lg-2 col-sm-4 col-md-4"
          >
            <div className="single-categories-box">
              <img src="/img/categories/categories-img1.png" alt="image" />
              <h3>Diagnostic Sets</h3>
            </div>
          </Link>

          {/* <Link className="col-lg-2 col-sm-4 col-md-4">
            <div className="single-categories-box">
              <img src="/img/categories/categories-img2.png" alt="image" />
              <h3>Antiseptic</h3>
            </div>
          </Link> */}

          <Link
            href={"/category/rehabilitation"}
            className="col-lg-2 col-sm-4 col-md-4"
          >
            <div className="single-categories-box">
              <img src="/img/categories/categories-img3.png" alt="image" />
              <h3>Rehabilitation</h3>
            </div>
          </Link>

          <Link
            href={"/category/medical-disposable"}
            className="col-lg-2 col-sm-4 col-md-4"
          >
            <div className="single-categories-box">
              <img src="/img/categories/categories-img4.png" alt="image" />
              <h3>Medical Disposable</h3>
              <Link href="#"></Link>
            </div>
          </Link>

          {/* <div className="col-lg-2 col-sm-4 col-md-4">
            <div className="single-categories-box">
              <img src="/img/categories/categories-img5.png" alt="image" />
              <h3>Accessories</h3>
              <Link href="#"></Link>
            </div>
          </div> */}

          <Link
            href={"/category/medical-equipment"}
            className="col-lg-2 col-sm-4 col-md-4"
          >
            <div className="single-categories-box">
              <img src="/img/categories/categories-img6.png" alt="image" />
              <h3>Equipment</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesStyleTwo;
