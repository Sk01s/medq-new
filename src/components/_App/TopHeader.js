import React from "react";
import Link from "next/link";
import { handleLogout } from "../../utils/auth";
import firebaseInstance from "@/lib/firebase";

const TopHeader = ({ user }) => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7">
            <ul className="top-header-contact-info">
              <li>
                <i className="bx bx-phone-call"></i>
                <a href="tel:+1234567898">(+123) 456-7898</a>
              </li>
              <li>
                <i className="bx bx-map"></i>
                <span>6890 Blvd, The Bronx, NY 1058, USA</span>
              </li>
            </ul>
          </div>

          <div className="col-lg-6 col-md-5">
            <ul className="top-header-menu">
              <li>
                {user ? (
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                    }}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link href="/auth">Log In</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
