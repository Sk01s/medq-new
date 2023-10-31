"use client";
import { Inter } from "next/font/google";
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
import "../../public/css/admin.css";
import "../../public/css/responsive.css";
import "../../public/css/loader.css";
import "../../public/css/rtl.css";
import Navbar from "./../components/_App/Navbar";
import { RecoilRoot, useRecoilValue } from "recoil";
import Footer from "@/components/_App/Footer";
import TopHeader from "@/components/_App/TopHeader";
import firebaseInstance from "@/lib/firebase";
import { fetchUser } from "@/utils/recoil-atoms";
import AdminNavbar from "@/components/_App/AdminNavbar";
import { Suspense, useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [user, setUser] = useState();
  useEffect(() => {
    const getUser = async (currentUser) => {
      const res = await firebaseInstance.getUser(currentUser.uid);
      console.log(res.data());
      setUser(res?.data());
    };
    firebaseInstance.auth.onAuthStateChanged(getUser);
  }, []);

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
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
            <Footer />
          </RecoilRoot>
        </Suspense>
      </body>
    </html>
  );
}
