import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="widget-area">
      <section className="widget widget_insight">
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <Link href="/purchase-guide">Purchase Guide</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-of-service">Terms of Service</Link>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
