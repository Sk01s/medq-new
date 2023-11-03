"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import PageBanner from "@/components/Common/PageBanner";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import firebaseInstance from "@/lib/firebase";
import FacilityStyleOne from "@/components/Common/FacilityStyleOne";

const Checkout = () => {
  const router = useRouter();
  const [user, setUser] = React.useState(firebaseInstance.auth.currentUser);
  333;
  const [products, setProducts] = React.useState([]);
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    firebaseInstance.auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      firebaseInstance.auth.onAuthStateChanged(() => {});
    };
  }, []);

  //
  React.useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("myCart")) || []);
  }, []);

  

  return (
    <>
      <PageBanner
        pageTitle="Checkout"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Checkout"
      />

      {loading ? "Loading" : ""}

      <CheckoutForm products={products} success={success} user={user} />

      <FacilityStyleOne />
    </>
  );
};

export default Checkout;
// Checkout
