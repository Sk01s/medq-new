"use client";
import BestSellingProductsStyleOne from "@/components/Products/BestSellingProductsStyleOne";
import Loader from "@/components/_App/Loader";
import OrderItem from "@/components/_App/OrderItem";
import firebaseInstance from "@/lib/firebase";
import { fetchProducts } from "@/utils/recoil-atoms";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
const Index = () => {
  const { contents } = useRecoilValueLoadable(fetchProducts);
  const products = contents;
  const [orders, setOrders] = useState([]);

  const router = useRouter();

  const [user, setUser] = useState({});

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await firebaseInstance.getOrders();
        const orders = res.docs.map((order) => ({
          ...order.data(),
          id: order.id,
        }));
        setOrders(orders);
      } catch (error) {
        console.log(error);
      }
    };
    const getUser = async (currentUser) => {
      if (!currentUser) return;
      const res = await firebaseInstance.getUser(currentUser.uid);
      setUser(res?.data());
    };
    firebaseInstance.auth.onAuthStateChanged(getUser);
    getOrders();
  }, []);
  useEffect(() => {
    if (firebaseInstance.auth.currentUser == null) router.back();
    if (!user.role) return;
    if (user.role !== "ADMIN") router.back();
  }, [user]);

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
      <div className="admin-main-content">
        <div className="container">
          <div className="row">
            {/* <div className="col-lg-4 col-md-6">
              <div className="admin-card">
                <i className="bx bx-user-plus"></i>
                <h3>55</h3>
                <p>All Users</p>
              </div>
            </div> */}

            <BestSellingProductsStyleOne products={products} admin />
          </div>
          <div>
            <div className="grid grid-product grid-count-6">
              {/* <div className="grid-col">
                <h5>Payment</h5>
              </div> */}
              <div className="grid-col">
                <h5>Price</h5>
              </div>
              <div className="grid-col">
                <h5>Delivered ?</h5>
              </div>
              <div className="grid-col">
                <h5>Orders date </h5>
              </div>
              <div className="grid-col">
                <h5>address</h5>
              </div>
            </div>
            {orders.map((order, index) => (
              <>
                <OrderItem order={order} index={index} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
