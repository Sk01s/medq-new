// pages/search.js
"use client";
import AllProducts from "@/components/Products/AllProducts";
import Loader from "@/components/_App/Loader";
import { fetchProducts } from "@/utils/recoil-atoms";
import { useParams } from "next/navigation";
import { useRecoilValueLoadable } from "recoil";
function isCompatible(obj, searchString) {
  if (
    !obj ||
    !obj.name ||
    !obj.description ||
    typeof obj.name !== "string" ||
    typeof obj.description !== "string"
  ) {
    return false;
  }

  // Convert both name and description to lowercase for a case-insensitive search
  const nameLower = obj.name.toLowerCase();
  const descriptionLower = obj.description.toLowerCase();
  const searchStringLower = searchString.toLowerCase();

  // Check if the searchString exists in either name or description
  return (
    nameLower.includes(searchStringLower) ||
    descriptionLower.includes(searchStringLower)
  );
}

// Example usage:

export default function Search() {
  const { id } = useParams();
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
  const filterdProducts = products.filter((product) =>
    isCompatible(product, id)
  );

  return (
    <section className="products-area products-collections-area ptb-70">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12"></div>
          <h1>Search Results</h1>
          <p>You searched for: {id}</p>
          {/* Add your search results here */}
          <AllProducts products={filterdProducts} />
        </div>
      </div>
    </section>
  );
}
