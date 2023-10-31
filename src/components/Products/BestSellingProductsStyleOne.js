import React from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { qModalState, quickViewProductState } from "../../utils/recoil-atoms";
import calculatePersentage from "../../utils/calculatePercentage";
import AddToCart from "../Common/AddToCart";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const BestSellingProductsStyleOne = ({ products }) => {
  const [qModal, setQModal] = useRecoilState(qModalState);
  const [quickViewProduct, setQuickViewProduct] = useRecoilState(
    quickViewProductState
  );

  const toggleModal = (p) => {
    // e.preventDefault()
    setQModal(!qModal);
    setQuickViewProduct(p);
    // console.log(quickViewProduct)
  };

  return (
    <>
      <div className="products-area pb-40">
        <div className="container">
          <div className="section-title">
            <h2>Best Selling</h2>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            className="products-slides"
          >
            {products.length ? (
              products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="single-products-box">
                    <div className="image">
                      <Link
                        href={`/product/${product._id}`}
                        className="d-block"
                      >
                        <img src={product.mediaUrl} alt={product.name} />
                      </Link>

                      <div className="new">New</div>
                      {product.onSale ? <div className="sale">Sale</div> : ""}

                      <div className="buttons-list">
                        <ul>
                          <li>
                            <AddToCart product={product} />
                          </li>
                          <li>
                            <div className="wishlist-btn">
                              <Link href="#">
                                <i className="bx bx-heart"></i>
                                <span className="tooltip-label">
                                  Add to Wishlist
                                </span>
                              </Link>
                            </div>
                          </li>
                          <li>
                            <div className="quick-view-btn">
                              <Link
                                href="#"
                                onClick={(e) => {
                                  e.preventDefault();
                                  toggleModal(product);
                                }}
                              >
                                <i className="bx bx-search-alt"></i>
                                <span className="tooltip-label">
                                  Quick View
                                </span>
                              </Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="content">
                      <h3>
                        <Link href={`/product/${product._id}`}>
                          {product.name}
                        </Link>
                      </h3>
                      <div className="price">
                        {product.onSale ? (
                          <div>
                            <span className="old-price">${product.price}</span>
                            <span className="new-price">
                              $
                              {calculatePersentage(
                                product.price,
                                product.onOffer
                              )}
                            </span>
                          </div>
                        ) : (
                          <span className="new-price">${product.price}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            ) : (
              <h3>Not Found!</h3>
            )}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BestSellingProductsStyleOne;
