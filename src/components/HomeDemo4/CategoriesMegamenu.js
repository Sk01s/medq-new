import React from "react";
import Link from "next/link";

const CategoriesMegamenu = () => {
  return (
    <div className="megamenu-container">
      <div className="megamenu-title">Categories</div>

      <div className="megamenu-category">
        <ul className="nav">
          <li className="nav-item">
            <Link href="#" className="nav-link">
              Accessories <i className="flaticon-next"></i>
            </Link>

            <ul className="dropdown-menu megamenu">
              <li className="row align-items-center">
                <div className="col-lg-4 col-sm-6">
                  <h3>Accessories I</h3>

                  <ul className="megamenu-nav">
                    <li>
                      <Link href="#">EKG/ECG Machines</Link>
                    </li>
                    <li>
                      <Link href="#">Surgical Tables</Link>
                    </li>
                    <li>
                      <Link href="#">Blanket Warmers</Link>
                    </li>
                    <li>
                      <Link href="#">Electrosurgical Units</Link>
                    </li>
                    <li>
                      <Link href="#">Surgical Lights</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <h3>Accessories II</h3>

                  <ul className="megamenu-nav">
                    <li>
                      <Link href="#">Stretchers</Link>
                    </li>
                    <li>
                      <Link href="#">Defibrillators</Link>
                    </li>
                    <li>
                      <Link href="#">Anesthesia Machines</Link>
                    </li>
                    <li>
                      <Link href="#">Patient Monitors</Link>
                    </li>
                    <li>
                      <Link href="#">Sterilizers</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <div className="custom-media">
                    <Link href="#" className="d-block">
                      <img src="/img/menu-img1.jpg" alt="image" />
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link href="#" className="nav-link">
              Pharmacy <i className="flaticon-next"></i>
            </Link>

            <ul className="dropdown-menu megamenu">
              <li className="row align-items-center">
                <div className="col-lg-4 col-sm-6">
                  <h3>Pharmacy 01</h3>

                  <ul className="megamenu-nav">
                    <li>
                      <Link href="#">Acetaminophen</Link>
                    </li>
                    <li>
                      <Link href="#">Adderall</Link>
                    </li>
                    <li>
                      <Link href="#">Amitriptyline</Link>
                    </li>
                    <li>
                      <Link href="#">Amlodipine</Link>
                    </li>
                    <li>
                      <Link href="#">Amoxicillin</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <h3>Pharmacy 02</h3>

                  <ul className="megamenu-nav">
                    <li>
                      <Link href="#">Cephalexin</Link>
                    </li>
                    <li>
                      <Link href="#">Ciprofloxacin</Link>
                    </li>
                    <li>
                      <Link href="#">Citalopram</Link>
                    </li>
                    <li>
                      <Link href="#">Clindamycin</Link>
                    </li>
                    <li>
                      <Link href="#">Clonazepam</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <h3>Pharmacy 03</h3>

                  <ul className="megamenu-nav">
                    <li>
                      <Link href="#">Ativan</Link>
                    </li>
                    <li>
                      <Link href="#">Atorvastatin</Link>
                    </li>
                    <li>
                      <Link href="#">Azithromycin</Link>
                    </li>
                    <li>
                      <Link href="#">Benzonatate</Link>
                    </li>
                    <li>
                      <Link href="#">Brilinta</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link href="#" className="nav-link">
              Health & Nutrition <i className="flaticon-next"></i>
            </Link>

            <ul className="dropdown-menu megamenu">
              <li className="row align-items-center">
                <div className="col-lg-4 col-sm-6">
                  <h3>Health Drinks</h3>

                  <ul className="megamenu-nav">
                    <li>
                      <Link href="#">Children</Link>
                    </li>
                    <li>
                      <Link href="#">Diabetic Drinks</Link>
                    </li>
                    <li>
                      <Link href="#">Glucose Powder</Link>
                    </li>
                    <li>
                      <Link href="#">Men & Women</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <h3>Breakfast Cereals</h3>

                  <ul className="megamenu-nav">
                    <li>
                      <Link href="#">Cereal Basics</Link>
                    </li>
                    <li>
                      <Link href="#">Sugar & Carbs</Link>
                    </li>
                    <li>
                      <Link href="#">Misleading Claims</Link>
                    </li>
                    <li>
                      <Link href="#">Better Breakfasts</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-sm-6">
                  <h3>Management</h3>

                  <ul className="megamenu-nav">
                    <li>
                      <Link href="#">Ativan</Link>
                    </li>
                    <li>
                      <Link href="#">Azithromycin</Link>
                    </li>
                    <li>
                      <Link href="#">Benzonatate</Link>
                    </li>
                    <li>
                      <Link href="#">Brilinta</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link href="#" className="nav-link">
              Personal Equipment <i className="flaticon-next"></i>
            </Link>

            <ul className="dropdown-menu">
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Cosmetic
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Microscope
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Hearing Aid
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Metal Stethoscope
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Medical Glass
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Isometric
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Mask
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Blood Pressure
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Face Mask
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Gloves
                </Link>
              </li>

              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Sanitizer
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link href="#" className="nav-link">
              Diagnostic Sets
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#" className="nav-link">
              Microscope
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#" className="nav-link">
              Needle & Syringes
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#" className="nav-link">
              OT Therapy
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#" className="nav-link">
              First Aid
            </Link>
          </li>

          <li className="nav-item">
            <Link href="#" className="nav-link">
              Transport
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoriesMegamenu;
