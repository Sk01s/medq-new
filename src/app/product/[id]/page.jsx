"use client";
import React from "react";
// import axios from "axios";
import PageBanner from "@/components/Common/PageBanner";
import ProductDetailsStyleOne from "@/components/ProductDetails/ProductDetailsStyleOne";
import FacilityStyleOne from "@/components/Common/FacilityStyleOne";
import { fetchProducts } from "@/utils/recoil-atoms";
import { useRecoilValue } from "recoil";
import { useParams } from "next/navigation";

const Product = () => {
  const { id } = useParams();
  const products = useRecoilValue(fetchProducts);

  if (products === undefined) {
    // Loading state
    return <div>Loading...</div>;
  }

  if (products instanceof Error) {
    // Error state
    return <div>Error: {products.message}</div>;
  }
  const product = products.find((product) => product._id == id);
  console.log(product);
  return (
    <>
      <PageBanner
        pageTitle={product?.name}
        homePageText="Home"
        homePageUrl="/"
        activePageText={product?.name}
      />

      <ProductDetailsStyleOne product={product} related={product} />

      <FacilityStyleOne />
    </>
  );
};

// Product.getInitialProps = async ({ query: { id } }) => {
//   // console.log(id)
//   const url = `${baseUrl}/api/products/product`;
//   const payload = { params: { id } };
//   console.log(payload, url);
//   const response = await axios.get(url, payload);
//   // console.log(response)
//   return {
//     product: response.data.product,
//     related: response.data.related,
//   };
// };

export default Product;
