"use client";
import React, { useState } from "react";
import PageBanner from "../../components/Common/PageBanner";
import FacilityStyleOne from "../../components/Common/FacilityStyleOne";
import LoginForm from "../../components/Auth/LoginForm";
import RegisterForm from "../../components/Auth/RegisterForm";
import EmailModal from "@/components/_App/EmailModel";

const Index = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <PageBanner
        pageTitle="Welcome to MedQ"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Welcome to MedQ"
      />

      <section className="profile-authentication-area ptb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <LoginForm handleOpenModal={handleOpenModal} />
            </div>
            <EmailModal open={open} onClose={handleCloseModal} />

            <div className="col-lg-6 col-md-12">
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>

      <FacilityStyleOne />
    </>
  );
};

export default Index;
