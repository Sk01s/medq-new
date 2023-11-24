"use client";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  collapsedState,
  modalState,
  searchState,
  productsState,
} from "../../utils/recoil-atoms";
import Link from "next/link";
// import Link from "../../utils/ActiveLink";
import ShoppingCartModal from "./ShoppingCartModal";
import SearchFormModal from "./SearchFormModal";
import { handleLogout } from "../../utils/auth";
import { subcategoryOptions } from "@/utils/constant";

const Navbar = ({ user }) => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);
  const [modal, setModal] = useRecoilState(modalState);
  const [search, setSearchModal] = useRecoilState(searchState);
  const [cartProducts, setCartProducts] = useRecoilState(productsState);
  const [isSmall, setIsSmall] = useState();
  useEffect(() => {
    const setSize = () => setIsSmall(window.innerWidth <= 766);
    window.addEventListener("resize", setSize);
    setSize();
    return () => {
      window.removeEventListener("resize", setSize);
    };
  }, []);

  // React.useEffect(() => {
  //   // setCartProducts(JSON.parse(localStorage.getItem("myCart")) || []);
  // }, [JSON.parse(localStorage.getItem("myCart"))[0]]);
  // console.log(cart)

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  };

  const toggleModal = () => {
    setModal(!modal);
    // console.log(modal)
  };

  const toggleSearch = () => {
    setSearchModal(!search);
    // console.log(modal)
  };

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="medq-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link
                href="/"
                onClick={() => setCollapsed(true)}
                className="navbar-brand"
              >
                <img src="/img/logo.png" alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  {isSmall || (
                    <li className="nav-item megamenu">
                      <Link href="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                  )}
                  <li className="nav-item megamenu">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      {isSmall || (
                        <>
                          Categories <i className="bx bx-chevron-down"></i>
                        </>
                      )}
                    </Link>
                    <ul className="dropdown-menu">
                      {isSmall && (
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <Link
                                href={"/"}
                                className="submenu-title"
                                style={{
                                  display: "block",
                                  width: "100%",
                                  marginBottom: "1rem",
                                }}
                              >
                                Home
                              </Link>

                              <Link
                                href="/shop"
                                onClick={() => setCollapsed(true)}
                                className="submenu-title"
                                style={{
                                  display: "block",
                                  width: "100%",
                                  marginTop: "0rem",
                                  marginBottom: "1rem",
                                }}
                              >
                                Shop
                              </Link>
                              <Link
                                href="/auth"
                                onClick={() => setCollapsed(true)}
                                className="submenu-title"
                                style={{
                                  display: "block",
                                  width: "100%",
                                  marginTop: "0rem",
                                  marginBottom: "1rem",
                                }}
                              >
                                Log In
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h6 className="submenu-title">Categories </h6>

                              <ul className="megamenu-submenu">
                                {isSmall ? (
                                  subcategoryOptions.map((subcategory) => (
                                    <li
                                      className="nav-item"
                                      key={subcategory.value}
                                    >
                                      <Link
                                        href={
                                          "/subcategory/" + subcategory.value
                                        }
                                        onClick={() => setCollapsed(true)}
                                        className="nav-link"
                                      >
                                        {subcategory.label}
                                      </Link>
                                    </li>
                                  ))
                                ) : (
                                  <div className="container">
                                    <div className="row">
                                      {subcategoryOptions.map(
                                        (subcategory, index) => (
                                          <div className="col-4" key={index}>
                                            <li className="nav-item">
                                              <Link
                                                href={
                                                  "/subcategory/" +
                                                  subcategory.value
                                                }
                                                onClick={() =>
                                                  setCollapsed(true)
                                                }
                                                className="nav-link"
                                              >
                                                {subcategory.label}
                                              </Link>
                                            </li>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  {isSmall || (
                    <>
                      <li className="nav-item">
                        <Link href="/shop" className="nav-link">
                          Shop
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/auth" className="nav-link">
                          Sign In
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div className="others-option">
                <div className="option-item">
                  <div className="cart-btn">
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleModal();
                      }}
                    >
                      <i className="bx bx-shopping-bag"></i>
                      <span>{cartProducts.length}</span>
                    </Link>
                  </div>
                </div>

                <div className="option-item">
                  <div className="search-btn-box" onClick={toggleSearch}>
                    <i className="search-btn bx bx-search-alt"></i>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {modal ? <ShoppingCartModal products={cartProducts} /> : null}

      <SearchFormModal />
    </>
  );
};

export default Navbar;
