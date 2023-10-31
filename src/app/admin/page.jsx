"use client";
import firebaseInstance from "@/lib/firebase";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Index = () => {
  const router = useRouter();

  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      if (!firebaseInstance?.auth?.currentUser?.uid) return;

      const res = await firebaseInstance.getUser(
        firebaseInstance.auth.currentUser.uid
      );
      setUser(res?.data());
    };
    getUser();
    if (user.role !== "ADMIN") router.back();
  }, [firebaseInstance.auth.currentUser]);
  return (
    <>
      <div className="admin-main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="admin-card">
                <i className="bx bx-user-plus"></i>
                <h3>55</h3>
                <p>All Users</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="admin-card">
                <i className="bx bx-list-check"></i>
                <h3>24</h3>
                <p>All Orders</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
              <div className="admin-card">
                <i className="bx bx-cart"></i>
                <h3>333</h3>
                <p>All Products</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
