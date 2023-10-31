import React from "react";
import Link from "next/link";

const BlogGrid3Row = () => {
  return (
    <section className="blog-area ptb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <Link href="#" className="d-block">
                  <img src="/img/blog/blog-img1.jpg" alt="image" />
                </Link>
              </div>

              <div className="post-content">
                <h3>
                  <Link href="#">
                    A researcher is conducting research on coronavirus in the
                    lab
                  </Link>
                </h3>
                <ul className="post-meta align-items-center d-flex">
                  <li>
                    <div className="flex align-items-center">
                      <img src="/img/user1.jpg" alt="image" />

                      <Link href="#">Nathan Oritz</Link>
                    </div>
                  </li>
                  <li>06-06-2020</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <Link href="#" className="d-block">
                  <img src="/img/blog/blog-img2.jpg" alt="image" />
                </Link>
              </div>

              <div className="post-content">
                <h3>
                  <Link href="#">
                    You have to wash your hands for 20 seconds to keep yourself
                    free
                  </Link>
                </h3>
                <ul className="post-meta align-items-center d-flex">
                  <li>
                    <div className="flex align-items-center">
                      <img src="/img/user2.jpg" alt="image" />
                      <Link href="#">Randy Osborne</Link>
                    </div>
                  </li>
                  <li>05-06-2020</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <Link href="#" className="d-block">
                  <img src="/img/blog/blog-img3.jpg" alt="image" />
                </Link>
              </div>

              <div className="post-content">
                <h3>
                  <Link href="#">
                    It is very important to wear proper clothing to keep
                    yourself free
                  </Link>
                </h3>
                <ul className="post-meta align-items-center d-flex">
                  <li>
                    <div className="flex align-items-center">
                      <img src="/img/user3.jpg" alt="image" />
                      <Link href="#">Patricia Marcus</Link>
                    </div>
                  </li>
                  <li>04-06-2020</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <Link href="#" className="d-block">
                  <img src="/img/blog/blog-img4.jpg" alt="image" />
                </Link>
              </div>

              <div className="post-content">
                <h3>
                  <Link href="#">
                    Hollowed-out public health system faces more cuts amid virus
                  </Link>
                </h3>
                <ul className="post-meta align-items-center d-flex">
                  <li>
                    <div className="flex align-items-center">
                      <img src="/img/user1.jpg" alt="image" />
                      <Link href="#">Nathan Oritz</Link>
                    </div>
                  </li>
                  <li>06-06-2020</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <Link href="#" className="d-block">
                  <img src="/img/blog/blog-img5.jpg" alt="image" />
                </Link>
              </div>

              <div className="post-content">
                <h3>
                  <Link href="#">
                    Comparing Nitrogen and Mechanical Vapor Sample Freezers
                  </Link>
                </h3>
                <ul className="post-meta align-items-center d-flex">
                  <li>
                    <div className="flex align-items-center">
                      <img src="/img/user2.jpg" alt="image" />
                      <Link href="#">Randy Osborne</Link>
                    </div>
                  </li>
                  <li>05-06-2020</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-blog-post">
              <div className="post-image">
                <Link href="#" className="d-block">
                  <img src="/img/blog/blog-img6.jpg" alt="image" />
                </Link>
              </div>

              <div className="post-content">
                <h3>
                  <Link href="#">
                    Using Fluorescence Spectroscopy to Assess Food Quality
                  </Link>
                </h3>
                <ul className="post-meta align-items-center d-flex">
                  <li>
                    <div className="flex align-items-center">
                      <img src="/img/user3.jpg" alt="image" />
                      <Link href="#">Patricia Marcus</Link>
                    </div>
                  </li>
                  <li>04-06-2020</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="pagination-area text-center">
              <Link href="#" className="prev page-numbers">
                <i className="bx bx-chevrons-left"></i>
              </Link>
              <span className="page-numbers current" aria-current="page">
                1
              </span>
              <Link href="#" className="page-numbers">
                2
              </Link>
              <Link href="#" className="page-numbers">
                3
              </Link>
              <Link href="#" className="page-numbers">
                4
              </Link>
              <Link href="#" className="next page-numbers">
                <i className="bx bx-chevrons-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid3Row;
