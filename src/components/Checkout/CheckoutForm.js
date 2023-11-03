import React, { useState } from "react";
import Link from "next/link";
import calculateCartTotal from "@/utils/calculateCartTotal";
import Button from "@mui/material/Button";
import AddressForm from "./AddressForm";
import firebaseInstance from "@/lib/firebase";

const CheckoutForm = ({ products, success, user }) => {
  // const payload = {
  //   products,
  //   address,
  //   amount: options.amount,
  //   userId: firebaseInstance.auth.currentUser,
  // };
  const [cartAmout, setCartAmaount] = React.useState(0);
  const [stripeAmount, setStripeAmount] = React.useState(0);
  const [isCartEmpty, setCartEmpty] = React.useState(false);

  React.useEffect(() => {
    const { cartTotal, stripeTotal } = calculateCartTotal(products);
    setCartAmaount(cartTotal);
    setStripeAmount(stripeTotal);
    setCartEmpty(products.length === 0);
  }, [products]);
  return (
    <section className="checkout-area ptb-70">
      <div className="container">
        <div className="user-actions">
          <i className="bx bx-log-in"></i>
          <span>
            Returning customer? <Link href="/auth">Click here to login</Link>
          </span>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="order-details">
                <h3 className="title">Your Order</h3>

                <div className="order-table table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>

                    <tbody>
                      {products.length ? (
                        products.map((p) => (
                          <tr>
                            <td className="product-name">
                              <Link
                                href="/product/[id]"
                                as={`/product/${p._id}`}
                              >
                                {p.name}
                              </Link>
                            </td>

                            <td className="product-total">
                              <span className="subtotal-amount">
                                ${p.price}
                              </span>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <h3>Empty</h3>
                      )}

                      <tr>
                        <td className="order-subtotal">
                          <span>Cart Subtotal</span>
                        </td>

                        <td className="order-subtotal-price">
                          <span className="order-subtotal-amount">
                            ${cartAmout}
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td className="order-shipping">
                          <span>Shipping</span>
                        </td>

                        <td className="shipping-price">
                          <span>$10.00</span>
                        </td>
                      </tr>

                      <tr>
                        <td className="total-price">
                          <span>Order Total</span>
                        </td>

                        <td className="product-subtotal">
                          <span className="subtotal-amount">
                            ${parseFloat(cartAmout) + 10}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="payment-box">
                  {/* <StripeCheckout
                      name="MedQ"
                      amount={stripeAmount}
                      image={products.length > 0 ? products[0].mediaUrl : ""}
                      currency="USD"
                      shippingAddress={true}
                      billingAddress={true}
                      zipCode={true}
                      stripeKey="pk_test_51O4NlmDvZ1odoAo4e5hctvZdtns0WJpZ2MUoBVsFwUBIrLp4hY88kEW7j3OSS4qYgg4yD6VwW1Aj4Q4Waw9MuHAp00j6ZOrNTT"
                      email={user.email}
                      token={handleCheckout}
                      triggerEvent="onClick"
                    >
                      <button
                        className="default-btn"
                        disabled={isCartEmpty || success}
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="flaticon-tick"></i>
                        Place Order <span></span>
                      </button>
         
                    </StripeCheckout> */}
                  {user ? (
                    <>
                      <AddressForm products={products} user={user} />
                    </>
                  ) : (
                    <Link href="/auth" className="default-btn">
                      <i className="flaticon-tick"></i>
                      Please Login To Complete Your Order <span></span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CheckoutForm;
