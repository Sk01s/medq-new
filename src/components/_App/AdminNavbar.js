import React from "react";
import { useRecoilState } from "recoil";
import { collapsedState, addProductState } from "../../utils/recoil-atoms";
import Link from "next/link";
import AddProductsModal from "./AddProductsModal";
import { handleLogout } from "../../utils/auth";

const AdminNavbar = () => {
  const [collapsed, setCollapsed] = useRecoilState(collapsedState);

  // addProduct Modal
  const [addProduct, setAddProduct] = useRecoilState(addProductState);

  const toggleAddProduct = () => {
    setAddProduct(!addProduct);
    // console.log(modal)
  };

  const toggleNavbar = () => {
    setCollapsed(!collapsed);
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
      <div id="navbar" className="navbar-area admin-navbar-area">
        <div className="admin-main-nav">
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
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link
                      href="/admin"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      Dashboard
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      href="/admin"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/admin"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      Orders
                    </Link>
                  </li> */}
                </ul>

                <div className="others-option d-flex align-items-center">
                  <div className="option-item">
                    <Link
                      href="#searchForm"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleAddProduct();
                      }}
                      className="admin-btn"
                    >
                      Add Products <span></span>
                    </Link>
                  </div>

                  <div className="option-item">
                    <div className="profile">
                      <Link href="#" className="nav-link">
                        <svg
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          class="css-amu4db"
                          id="cds-react-aria-5"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.034 2.5a4.467 4.467 0 10.002 8.934 4.467 4.467 0 00-.002-8.934zM6.568 6.966a5.467 5.467 0 1110.934.002 5.467 5.467 0 01-10.934-.002zM15.868 13.348a.5.5 0 01.386-.048c4.093 1.17 6.246 4.961 6.246 8.7h-1c0-3.323-1.87-6.593-5.324-7.68a8.845 8.845 0 01-4.162 1.057h-.004a8.93 8.93 0 01-4.185-1.056C4.39 15.408 2.5 18.679 2.5 22h-1c0-3.74 2.178-7.53 6.245-8.7a.5.5 0 01.386.047 7.916 7.916 0 003.881 1.03 7.834 7.834 0 003.856-1.03z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="#"
                            onClick={() => setCollapsed(true)}
                            className="nav-link"
                          >
                            Settings
                          </Link>
                        </li>

                        <li className="nav-item">
                          <span
                            onClick={() => {
                              handleLogout();
                              console.log("login out");
                            }}
                            style={{ cursor: "pointer" }}
                            className="nav-link"
                          >
                            Sign out
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <AddProductsModal />
    </>
  );
};

export default AdminNavbar;
