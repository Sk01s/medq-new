import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { productsState } from "../../utils/recoil-atoms";

const AddToCart = ({ product }) => {
  const [cartProducts, setCartProducts] = useRecoilState(productsState);
  const handleAddToCart = (data, quantity = 1) => {
    if (data.count <= 0 ) {
      toast.error("out of stock", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return
    }
    let getCarts = JSON.parse(localStorage.getItem("myCart"));
    let existed_item_index = -1;
    if (getCarts || getCarts != null) {
      existed_item_index = getCarts.findIndex((item) => item._id === data._id);
    }

    if (existed_item_index !== -1) {
      const updatedCarts = JSON.parse(JSON.stringify(getCarts));
      updatedCarts[existed_item_index].quantity += quantity;
      localStorage.setItem("myCart", JSON.stringify(updatedCarts));
    } else {
      let cartProducts = new Array();
      if (localStorage.getItem("myCart")) {
        cartProducts = JSON.parse(localStorage.getItem("myCart"));
      }
      let dataWQty = Object.assign({}, data, { quantity: quantity });
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
    <div className="cart-btn">
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleAddToCart(product);
        }}
      >
        <i className="bx bxs-cart-add"></i>
        <span className="tooltip-label">Add to Cart</span>
      </Link>
    </div>
  );
};

export default AddToCart;
