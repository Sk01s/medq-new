import React from "react";
import Link from "next/link";
import { handleLogout } from "../../utils/auth";

const TopHeader = ({ user }) => {
  return (
    <div className="top-header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7">
            <ul className="top-header-contact-info">
              <li>
                <i className="bx bx-phone-call"></i>
                <a
                  href="tel:+1234567898"
                  style={{ textDecoration: "underline" }}
                >
                  (+123) 456-7898
                </a>
              </li>
              <li>
                <Link style={{ textDecoration: "underline" }} href={"/contact"}>
                  Contact
                </Link>
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
