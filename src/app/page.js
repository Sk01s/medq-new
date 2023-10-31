"use client";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import BannerSlider from "../components/Index/BannerSlider";
import CategoriesStyleOne from "../components/ProductCategories/CategoriesStyleOne";
import CategoriesStyleTwo from "../components/ProductCategories/CategoriesStyleTwo";
import BestSellingProductsStyleOne from "../components/Products/BestSellingProductsStyleOne";
import ProductsPromotionStyleOne from "../components/ProductsPromotions/ProductsPromotionStyleOne";
import NewArrivals from "../components/Products/NewArrivals";
import HotDealOfferStyleOne from "../components/Common/HotDealOfferStyleOne";
import SellingBrandsStyleOne from "../components/Common/SellingBrandsStyleOne";
import BlogPostStyleOne from "../components/Common/BlogPostStyleOne";
import FacilityStyleOne from "../components/Common/FacilityStyleOne";
import { useRecoilValue } from "recoil";
import { fetchProducts } from "@/utils/recoil-atoms";

const Index = () => {
  const products = useRecoilValue(fetchProducts);

  if (products === undefined) {
    // Loading state
    return <div>Loading...</div>;
  }

  if (products instanceof Error) {
    // Error state
    return <div>Error: {products.message}</div>;
  }
  return (
    <>
      <BannerSlider />

      <div className="pt-70 pb-40">{/* <CategoriesStyleOne /> */}</div>

      <div className="pb-40">
        <CategoriesStyleTwo />
      </div>

      <BestSellingProductsStyleOne products={products} />

      <div className="pb-40">
        <ProductsPromotionStyleOne />
      </div>

      <NewArrivals products={products} />

      <HotDealOfferStyleOne />

      <div className="pt-70 pb-40">
        <SellingBrandsStyleOne />
      </div>

      {/* <BlogPostStyleOne /> */}

      <FacilityStyleOne />
    </>
  );
};

// Index.getInitialProps = async (ctx) => {
//   // console.log(ctx.query)
//   const page = ctx.query.page ? ctx.query.page : "1";
//   const size = 8;
//   const searchTerm = "medical";
//   // fetch data on server
//   const url = `${baseUrl || "https://medq.vercel.app"}/api/products`;
//   const payload = { params: { page, size, searchTerm } };
//   try {
//     const response = await axios.get(url, payload);
//     console.log(payload, url);
//     // return response data as an object
//     return response.data;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
//   // note: this object will be merge with existing props
// };

export default Index;
