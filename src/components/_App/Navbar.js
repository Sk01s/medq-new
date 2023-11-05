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
                    <>
                      <li className="nav-item megamenu">
                        <Link
                          href="/"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/shop"
                          onClick={(e) => e.preventDefault()}
                          className="nav-link"
                        >
                          Shop
                        </Link>
                      </li>
                    </>
                  )}
                  {/* <li className="nav-item">
                    {isSmall || (
                      <Link
                        href="/"
                        onClick={() => setCollapsed(true)}
                        className="nav-link"
                      >
                        Home <i className="bx bx-chevron-down"></i>
                      </Link>
                    )}
                  </li> */}
                  {/* <li className="nav-item">
                    {isSmall || (
                      <Link
                        href="/shop"
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Shop <i className="bx bx-chevron-down"></i>
                      </Link>
                    )}
                  </li> */}

                  <li className="nav-item megamenu">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Pages <i className="bx bx-chevron-down"></i>
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col">
                              <h6 className="submenu-title">Pages </h6>

                              <ul className="megamenu-submenu">
                                {isSmall && (
                                  <li className="nav-item">
                                    <Link
                                      href="/"
                                      onClick={() => setCollapsed(true)}
                                      className="nav-link"
                                    >
                                      Home
                                    </Link>
                                  </li>
                                )}
                                {isSmall && (
                                  <li className="nav-item">
                                    <Link
                                      href="/shop"
                                      onClick={() => setCollapsed(true)}
                                      className="nav-link"
                                    >
                                      Shop
                                    </Link>
                                  </li>
                                )}
                                <li className="nav-item">
                                  <Link
                                    href="/about"
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    About Us
                                  </Link>
                                </li>

                                {user ? (
                                  <li className="nav-item">
                                    <Link
                                      href="/auth"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handleLogout();
                                      }}
                                      className="nav-link"
                                    >
                                      Logout
                                    </Link>
                                  </li>
                                ) : (
                                  <li className="nav-item">
                                    <Link
                                      href="/auth"
                                      onClick={() => setCollapsed(true)}
                                      className="nav-link"
                                    >
                                      Login
                                    </Link>
                                  </li>
                                )}

                                <li className="nav-item">
                                  <Link
                                    href="/faq"
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    FAQ's
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    href="/customer-service"
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Customer Service
                                  </Link>
                                </li>
                                <li className="nav-item">
                                  <Link
                                    href="/purchase-guide"
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Purchase Guide
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/privacy-policy"
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Privacy Policy
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/terms-of-service"
                                    onClick={() => setCollapsed(true)}
                                    className="nav-link"
                                  >
                                    Terms of Service
                                  </Link>
                                </li>

                                {/* <li className="nav-item">
                                    <Link
                                      href="/track-order"
                                      onClick={() => setCollapsed(true)}
                                      className="nav-link"
                                    >
                                      Tracking Order
                                    </Link>
                                  </li> */}
                              </ul>
                            </div>

                            {/* <div className="col">
                                <h6 className="submenu-title">Shop Styles</h6>

                                <ul className="megamenu-submenu">
                                  <li className="nav-item">
                                    <Link
                                      href="/products-left-sidebar"
                                      onClick={() => setCollapsed(true)}
                                      className="nav-link"
                                    >
                                      Left Sidebar
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link
                                      href="/products-left-sidebar-with-categories"
                                      onClick={() => setCollapsed(true)}
                                      className="nav-link"
                                    >
                                      Left Sidebar With Categories
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link
                                      href="/products-right-sidebar"
                                      onClick={() => setCollapsed(true)}
                                      className="nav-link"
                                    >
                                      Right Sidebar
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link
                                      href="/products-right-sidebar-with-categories"
                                      onClick={() => setCollapsed(true)}
                                      className="nav-link"
                                    >
                                      Right Sidebar With Categories
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link
                                      href="/products-without-sidebar"
                                      onClick={() => setCollapsed(true)}
                                      className="nav-link"
                                    >
                                      Without Sidebar
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link
                                      href="/products-left-sidebar-fullwidth"
                                      onClick={() => setCollapsed(true)}
                                      className="nav-link"
                                    >
                                      With Left Sidebar
                                    </Link>
                                  </li>

                                  <li className="nav-item">
                                    <Link
                                      href="/products-right-sidebar-fullwidth"
                                      onClick={() => setCollapsed(true)}
                                      className="nav-link"
                                    >
                                      With Right Sidebar
                                    </Link>
                                  </li>
                                </ul>
                              </div> */}
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
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
