import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <div className="widget-area">
      <div className="widget widget_search">
        <h3 className="widget-title">Search</h3>

        <form className="search-form">
          <label>
            <span className="screen-reader-text">Search for:</span>
            <input
              type="search"
              className="search-field"
              placeholder="Search..."
            />
          </label>
          <button type="submit">
            <i className="bx bx-search-alt"></i>
          </button>
        </form>
      </div>

      <div className="widget widget_medq_posts_thumb">
        <h3 className="widget-title">Popular Posts</h3>

        <div className="item">
          <Link href="#" className="thumb">
            <span className="fullimage cover bg1" role="img"></span>
          </Link>
          <div className="info">
            <span>June 10, 2020</span>
            <h4 className="title usmall">
              <Link href="#">The Data Surrounding Higher Education</Link>
            </h4>
          </div>

          <div className="clear"></div>
        </div>

        <div className="item">
          <Link href="#" className="thumb">
            <span className="fullimage cover bg2" role="img"></span>
          </Link>
          <div className="info">
            <span>June 21, 2020</span>
            <h4 className="title usmall">
              <Link href="#">
                Conversion Rate the Sales Funnel Optimization
              </Link>
            </h4>
          </div>

          <div className="clear"></div>
        </div>

        <div className="item">
          <Link href="#" className="thumb">
            <span className="fullimage cover bg3" role="img"></span>
          </Link>
          <div className="info">
            <span>June 30, 2020</span>
            <h4 className="title usmall">
              <Link href="#">Business Data is changing the world’s Energy</Link>
            </h4>
          </div>

          <div className="clear"></div>
        </div>
      </div>

      <div className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>

        <ul>
          <li>
            <Link href="#">
              Design <span className="post-count">(03)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              Lifestyle <span className="post-count">(05)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              Script <span className="post-count">(10)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              Device <span className="post-count">(08)</span>
            </Link>
          </li>
          <li>
            <Link href="#">
              Tips <span className="post-count">(01)</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="widget widget_tag_cloud">
        <h3 className="widget-title">Popular Tags</h3>

        <div className="tagcloud">
          <Link href="#">
            Business <span className="tag-link-count"> (3)</span>
          </Link>
          <Link href="#">
            Design <span className="tag-link-count"> (3)</span>
          </Link>
          <Link href="#">
            Aike <span className="tag-link-count"> (2)</span>
          </Link>
          <Link href="#">
            Fashion <span className="tag-link-count"> (2)</span>
          </Link>
          <Link href="#">
            Travel <span className="tag-link-count"> (1)</span>
          </Link>
          <Link href="#">
            Smart <span className="tag-link-count"> (1)</span>
          </Link>
          <Link href="#">
            Marketing <span className="tag-link-count"> (1)</span>
          </Link>
          <Link href="#">
            Tips <span className="tag-link-count"> (2)</span>
          </Link>
        </div>
      </div>

      <div className="widget widget_instagram">
        <ul>
          <li>
            <div className="box">
              <img src="/img/gallery/gallery-img1.jpg" alt="image" />
              <i className="bx bxl-instagram"></i>

              <Link href="#" target="_blank" className="link-btn"></Link>
            </div>
          </li>

          <li>
            <div className="box">
              <img src="/img/gallery/gallery-img2.jpg" alt="image" />
              <i className="bx bxl-instagram"></i>
              <Link href="#" target="_blank" className="link-btn"></Link>
            </div>
          </li>

          <li>
            <div className="box">
              <img src="/img/gallery/gallery-img3.jpg" alt="image" />
              <i className="bx bxl-instagram"></i>
              <Link href="#" target="_blank" className="link-btn"></Link>
            </div>
          </li>

          <li>
            <div className="box">
              <img src="/img/gallery/gallery-img4.jpg" alt="image" />
              <i className="bx bxl-instagram"></i>
              <Link href="#" target="_blank" className="link-btn"></Link>
            </div>
          </li>

          <li>
            <div className="box">
              <img src="/img/gallery/gallery-img5.jpg" alt="image" />
              <i className="bx bxl-instagram"></i>
              <Link href="#" target="_blank" className="link-btn"></Link>
            </div>
          </li>

          <li>
            <div className="box">
              <img src="/img/gallery/gallery-img6.jpg" alt="image" />
              <i className="bx bxl-instagram"></i>
              <Link href="#" target="_blank" className="link-btn"></Link>
            </div>
          </li>

          <li>
            <div className="box">
              <img src="/img/gallery/gallery-img7.jpg" alt="image" />
              <i className="bx bxl-instagram"></i>
              <Link href="#" target="_blank" className="link-btn"></Link>
            </div>
          </li>

          <li>
            <div className="box">
              <img src="/img/gallery/gallery-img8.jpg" alt="image" />
              <i className="bx bxl-instagram"></i>
              <Link href="#" target="_blank" className="link-btn"></Link>
            </div>
          </li>

          <li>
            <div className="box">
              <img src="/img/gallery/gallery-img9.jpg" alt="image" />
              <i className="bx bxl-instagram"></i>
              <Link href="#" target="_blank" className="link-btn"></Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogSidebar;
