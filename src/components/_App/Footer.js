import React from "react";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <Link href="/" className="logo d-inline-block">
                  <img src="/img/logo.png" alt="image" />
                </Link>

                <ul className="footer-contact-info">
                  <li>
                    <span>Hotline:</span> <Link href="#">16768</Link>
                  </li>
                  <li>
                    <span>Phone:</span>{" "}
                    <Link href="tel:+1234567898">(+123) 456-7898</Link>
                  </li>
                  <li>
                    <span>Email:</span>{" "}
                    <Link href="mailto:hello@medQ.com">hello@medQ.com</Link>
                  </li>
                  <li>
                    <span>Address:</span>{" "}
                    <Link href="#" target="_blank">
                      6890 Blvd, The Bronx, NY 1058, USA
                    </Link>
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <Link href="https://www.facebook.com/" target="_blank">
                      <i className="bx bxl-facebook-square"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.twitter.com/" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/" target="_blank">
                      <i className="bx bxl-instagram-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/" target="_blank">
                      <i className="bx bxl-linkedin-square"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.pinterest.com/" target="_blank">
                      <i className="bx bxl-pinterest"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Information</h3>

                <ul className="link-list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/customer-service">Delivery Information</Link>
                  </li>
                  <li>
                    <Link href="/customer-service">Orders and Returns</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Customer Care</h3>

                <ul className="link-list">
                  <li>
                    <Link href="/faq">Help & FAQs</Link>
                  </li>

                  <li>
                    <Link href="/purchase-guide">Purchasing Policy</Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="col-lg-3 col-sm-6 col-md-6">
              <div className="single-footer-widget">
                <h3>Newsletter</h3>
                <p>
                  Sign up for our mailing list to get the latest updates &
                  offers.
                </p>
                <form className="newsletter-form">
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="Enter your email address"
                    name="email"
                    required
                  />
                  <button type="submit" className="default-btn">
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <p>
                  Copyright <i className="bx bx-copyright"></i> {currentYear}{" "}
                  MedQ
                </p>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="payment-types">
                  <ul className="d-flex align-items-center justify-content-end">
                    <li>We accept payment via:</li>
                    <li>
                      <Link href="#" target="_blank">
                        <img src="/img/payment-types/visa.png" alt="image" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        <img
                          src="/img/payment-types/mastercard.png"
                          alt="image"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        <img src="/img/payment-types/paypal.png" alt="image" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        <img
                          src="/img/payment-types/descpver.png"
                          alt="image"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="#" target="_blank">
                        <img
                          src="/img/payment-types/american-express.png"
                          alt="image"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookies Consent */}
      <CookieConsent
        location="bottom"
        buttonText="Sure!!"
        cookieName="medqReactNextStore"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={999}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </>
  );
};

export default Footer;
