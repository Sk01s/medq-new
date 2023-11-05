"use client";
import "../../public/css/bootstrap.min.css";
import "../../public/css/animate.min.css";
import "../../public/css/boxicons.min.css";
import "../../public/css/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "react-toastify/dist/ReactToastify.css";
import "react-18-image-lightbox/style.css";
import "swiper/css";
import "swiper/css/bundle";

import "../../public/css/style.css";
import "../../public/css/order.css";
import "../../public/css/admin.css";
import "../../public/css/responsive.css";
import "../../public/css/loader.css";
import "../../public/css/rtl.css";
import Navbar from "./../components/_App/Navbar";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import Footer from "@/components/_App/Footer";
import TopHeader from "@/components/_App/TopHeader";
import firebaseInstance from "@/lib/firebase";
import { fetchUser } from "@/utils/recoil-atoms";
import AdminNavbar from "@/components/_App/AdminNavbar";
import React, { Suspense, useEffect, useState } from "react";
import Loader from "@/components/_App/Loader";
import { ToastContainer } from "react-toastify";
export default function RootLayout({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    firebaseInstance.auth.onAuthStateChanged(async (currentUser) => {
      if (!currentUser) return setUser(null);
      const res = await firebaseInstance.getUser(currentUser.uid);
      setUser(res?.data());
    });
  }, []);

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loader />}>
          <RecoilRoot>
            {user?.role === "ADMIN" ? (
              <AdminNavbar />
            ) : (
              <>
                <TopHeader user={user} />
                <Navbar user={user} />
              </>
            )}
            {children}
            <ToastContainer />
            <Footer />
          </RecoilRoot>
        </Suspense>
      </body>
    </html>
  );
}
