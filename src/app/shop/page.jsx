"use client";
import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import ProductSidebar from "@/components/Products/ProductSidebar";
import AllProducts from "@/components/Products/AllProducts";
import FacilityStyleOne from "@/components/Common/FacilityStyleOne";
// import Pagination from "@/components/Products/Pagination";
import { fetchProducts } from "@/utils/recoil-atoms";
import { useRecoilValueLoadable } from "recoil";
import Loader from "@/components/_App/Loader";

const Shop = ({}) => {
  const { contents } = useRecoilValueLoadable(fetchProducts);
  const products = contents;
  if (products instanceof Promise) {
    // Loading state
    return <Loader />;
  }
  if (products instanceof Error) {
    // Error state
    return <div>Error: {products.message}</div>;
  }
  return (
    <>
      <PageBanner
        pageTitle="Products "
        homePageText="Home"
        homePageUrl="/"
        activePageText="Products "
      />

      <section className="products-area products-collections-area ptb-70">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="medq-grid-sorting row align-items-center">
                <div className="col-lg-6 col-md-6 result-count">
                  <p>
                    We found <span className="count">{products.length}</span>{" "}
                    products available for you
                  </p>
                </div>

                <div className="col-lg-6 col-md-6 ordering">
                  <div className="select-box">
                    <label>Sort By:</label>
                    <select className="form-control">
                      <option>Default</option>
                      <option>Popularity</option>
                      <option>Latest</option>
                      <option>Price: low to high</option>
                      <option>Price: high to low</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* All Products */}
              <AllProducts products={products} />

              {/* <Pagination totalPages={totalPages} /> */}
            </div>
          </div>
        </div>
      </section>

      <FacilityStyleOne />
    </>
  );
};

export default Shop;
