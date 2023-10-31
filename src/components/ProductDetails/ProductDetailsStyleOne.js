import React from "react";
import Link from "next/link";
import RelatedProducts from "./RelatedProducts";
import ProductImageStyleOne from "./ProductImageStyleOne";
import ProductDetailsTab from "./ProductDetailsTab";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { productsState } from "../../utils/recoil-atoms";
import calculatePersentage from "../../utils/calculatePercentage";

const ProductDetailsStyleOne = ({ product, related }) => {
  const [quantity, setQuantity] = React.useState(1);
  const [cartProducts, setCartProducts] = useRecoilState(productsState);

  const addToCartWithQty = (e) => {
    e.preventDefault();
    let getCarts = JSON.parse(localStorage.getItem("myCart"));
    let existed_item_index = -1;
    if (getCarts || getCarts != null) {
      existed_item_index = getCarts.findIndex(
        (item) => item._id === product._id
      );
    }

    if (existed_item_index !== -1) {
      const updatedCarts = JSON.parse(JSON.stringify(getCarts));
      updatedCarts[existed_item_index].quantity += quantity;
      localStorage.setItem("myCart", JSON.stringify(updatedCarts));

      toast.success("Updated the cart successfully", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      let cartProducts = new Array();
      if (localStorage.getItem("myCart")) {
        cartProducts = JSON.parse(localStorage.getItem("myCart"));
      }
      let dataWQty = Object.assign({}, product, { quantity: quantity });
      let newCartProducts = [...cartProducts, dataWQty];

      localStorage.setItem("myCart", JSON.stringify(newCartProducts));
      const allCarts = JSON.parse(localStorage.getItem("myCart"));
      setCartProducts(allCarts);
      toast.success("Added to the cart successfully", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }

    // console.log(cartProducts)
  };

  return (
    <section className="product-details-area pt-70 pb-40">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <ProductImageStyleOne {...product} />
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="products-details-desc">
              <h3>{product.name}</h3>

              <div className="price">
                {product.onSale ? (
                  <div>
                    <span className="old-price">${product.price}</span>
                    <span className="new-price">
                      ${calculatePersentage(product.price, product.onOffer)}
                    </span>
                  </div>
                ) : (
                  <span className="new-price">${product.price}</span>
                )}
              </div>

              <div className="products-review">
                <div className="rating">
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                  <i className="bx bxs-star"></i>
                </div>
                <Link href="#" className="rating-count">
                  3 reviews
                </Link>
              </div>

              <ul className="products-info">
                <li>
                  <span>Vendor:</span> <Link href="#">Lereve</Link>
                </li>
                <li>
                  <span>Availability:</span>{" "}
                  <Link href="#">In stock (7 items)</Link>
                </li>
                <li>
                  <span>Products Type:</span>{" "}
                  <Link href={`/products?term=${product.productType}`}>
                    {product.productType}
                  </Link>
                </li>
              </ul>

              <div className="products-color-switch">
                <span>Color:</span>

                <ul>
                  <li>
                    <Link href="#" title="Black" className="color-black"></Link>
                  </li>
                  <li>
                    <Link href="#" title="White" className="color-white"></Link>
                  </li>
                  <li className="active">
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
                    <Link href="#" title="Teal" className="color-teal"></Link>
                  </li>
                </ul>
              </div>

              <div className="products-size-wrapper">
                <span>Size:</span>

                <ul>
                  <li>
                    <Link href="#">XS</Link>
                  </li>
                  <li className="active">
                    <Link href="#">S</Link>
                  </li>
                  <li>
                    <Link href="#">M</Link>
                  </li>
                  <li>
                    <Link href="#">XL</Link>
                  </li>
                  <li>
                    <Link href="#">XXL</Link>
                  </li>
                </ul>
              </div>

              <div className="products-info-btn">
                <Link href="/customer-service">
                  <i className="bx bxs-truck"></i> Shipping
                </Link>

                <Link href="/contact">
                  <i className="bx bx-envelope"></i> Ask about this products
                </Link>
              </div>

              <div className="products-add-to-cart">
                <div className="input-counter">
                  {/* <span className="minus-btn">
                                        <i className='bx bx-minus'></i>
                                    </span> */}
                  <input
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    value={quantity}
                    type="number"
                    min="1"
                  />
                  {/* <span className="plus-btn">
                                        <i className='bx bx-plus'></i>
                                    </span> */}
                </div>

                <button
                  onClick={addToCartWithQty}
                  type="submit"
                  className="default-btn"
                >
                  <i className="flaticon-trolley"></i> Add to Cart
                </button>
              </div>

              <div className="wishlist-btn">
                <Link href="#">
                  <i className="bx bx-heart"></i> Add to Wishlist
                </Link>
              </div>

              <div className="buy-checkbox-btn">
                <div className="item">
                  <input className="inp-cbx" id="cbx" type="checkbox" />
                  <label className="cbx" htmlFor="cbx">
                    <span>
                      <svg width="12px" height="10px" viewBox="0 0 12 10">
                        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                      </svg>
                    </span>
                    <span>I agree with the terms and conditions</span>
                  </label>
                </div>

                <div className="item">
                  <Link
                    href="#"
                    onClick={addToCartWithQty}
                    className="default-btn"
                  >
                    Buy it now!
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <ProductDetailsTab {...product} />
          </div>
        </div>
      </div>

      {/* <div className="pt-70">
        <RelatedProducts related={related} />
      </div> */}
    </section>
  );
};

export default ProductDetailsStyleOne;
