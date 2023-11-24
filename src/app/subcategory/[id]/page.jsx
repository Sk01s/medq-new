"use client";
import AllProducts from "@/components/Products/AllProducts";
import Loader from "@/components/_App/Loader";
import { fetchProducts } from "@/utils/recoil-atoms";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
function isContained(product, subcategory) {
  // Check if the subcategory exists in product
  if (product.subcategory === subcategory) return true;
  else {
    return false;
  }
}

// Example usage:

export default function Search() {
  const { id } = useParams();
  const { contents } = useRecoilValueLoadable(fetchProducts);
  const products = contents;
  const [filterdProducts, setFilterdProducts] = useState(
    products?.filter?.((product) => isContained(product, id))
  );
  useEffect(() => {
    setFilterdProducts(
      products?.filter?.((product) => isContained(product, id))
    );
  }, [products]);
  if (products instanceof Promise) {
    // Loading state
    return <Loader />;
  }
  if (products instanceof Error) {
    // Error state
    return <div>Error: {products.message}</div>;
  }

  return (
    <section className="products-area products-collections-area ptb-70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12"></div>
          <h1>
            {id?.split("-").map((name) => {
              return (
                <span style={{ textTransform: "capitalize" }}>{name} </span>
              );
            })}
          </h1>
          {/* Add your search results here */}
          <AllProducts products={filterdProducts || []} />
        </div>
      </div>
    </section>
  );
}
