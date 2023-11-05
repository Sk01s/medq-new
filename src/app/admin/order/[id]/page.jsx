"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import firebase from "@/lib/firebase";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
const displayDate = (timestamp) => {
  const date = new Date(timestamp);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // return day + ' ' + monthNames[monthIndex] + ' ' + year;
  return `${monthNames[monthIndex]} ${day}, ${year}`;
};
const OrderView = () => {
  const [orderDetails, setOrderDetails] = useState({
    address: {
      city: "",
      street: "",
      building: "",
      floor: "",
      isInternational: null,
    },
    items: [],
    fulfillment: false,
  });

  const price = orderDetails?.products?.reduce(
    (acc, next) => parseInt(acc) + parseInt(next.price),
    0
  );
  const totalPrice = orderDetails.address.isInternational
    ? price + 50
    : price + 5;

  const { id: orderId } = useParams();

  useEffect(() => {
    async function getOrder() {
      const data = await firebase.getOrder(orderId);
      const order = { ...data?.data(), id: data.id };
      setOrderDetails(order);
    }
    getOrder();
  }, [orderId]);

  return (
    <section className="product-form-container">
      <h2>Order</h2>
      {orderId && (
        <Suspense
          fallback={
            <div className="loader" style={{ minHeight: "80dvh" }}>
              <h6>Loading ... </h6>
              <br />
              <CircularProgress
                color="primary"
                size={"1.2rem"}
                style={{ marginLeft: "1rem" }}
              />
            </div>
          }
        >
          <div>
            <br />
            <section className="address">
              <h5>Contact</h5>
              <div>
                <div>{orderDetails?.email}</div>
                <div>{orderDetails.address?.building}</div>
              </div>
              <br />
            </section>
            <section className="address">
              <h5>Shipping Address</h5>

              <div>
                <div>
                  Country : {orderDetails.address?.country}
                  {" , "}
                </div>
                <div>
                  City : {orderDetails.address?.city}
                  {" , "}
                </div>

                <div>
                  Street : {orderDetails.address?.street}
                  {" , "}
                </div>

                <div>
                  State : {orderDetails.address?.state}
                  {" , "}
                </div>
                <br />
              </div>
            </section>
            <section className="items">
              <h5>items</h5>
              <br />
              <ol style={{ paddingLeft: "1.8rem", fontSize: "1.4rem" }}>
                {orderDetails.products?.map((item, index) => (
                  <li key={index}>
                    <div>
                      <p>Name : {item?.name}</p>
                      <p>Description : {item?.description}</p>
                      <p>Quantity : {item.count}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.4rem",
              }}
            >
              <strong>Price</strong>
              {<>$ {price}</>}
            </div>
            <br />
            <div>
              <h6>Order's Date</h6>
              <span>
                {orderDetails.date && displayDate(orderDetails.date.toDate())}
              </span>
            </div>
            <br />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <strong>Deliverd </strong>
              <span style={{ fontSize: "1rem" }}>
                {orderDetails.fulfillment ? "Yes" : "No"}
              </span>
              <button
                onClick={() => {
                  setOrderDetails((prev) => ({
                    ...prev,
                    fulfillment: !prev.fulfillment,
                  }));

                  firebase
                    .updateOrder(orderDetails.id, {
                      ...orderDetails,
                      fulfillment: !orderDetails.fulfillment,
                    })
                    .then(() => {
                      toast.success(
                        `the deliverly state set to ${
                          !orderDetails.fulfillment ? "Yes" : "No"
                        }`
                      );
                    })
                    .catch(() => {
                      setOrderDetails((prev) => ({
                        ...prev,
                        fulfillment: !prev.fulfillment,
                      }));
                      toast.error(
                        "Error happend while changing the delivery state of the order "
                      );
                    });
                }}
                style={{
                  borderRadius: "1rem",
                  border: "solid 1px #222",
                  backgroundColor: "white",
                  padding: " 0.5rem 1rem",
                }}
              >
                Change
              </button>
            </div>
          </div>
        </Suspense>
      )}
    </section>
  );
};

export default OrderView;
