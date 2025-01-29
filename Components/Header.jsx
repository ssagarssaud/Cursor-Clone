import React from "react";
import Logo from "../src/assets/placeholder-logo.webp";
import "./header.css";

const links = [
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "Features",
    href: "#",
  },
  {
    name: "Enterprise",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Form",
    href: "#",
  },
  {
    name: "Careers",
    href: "#",
  },
];

const Header = () => {
  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <img src={Logo} alt="This is the logo" />
            <span>CURSOR</span>
          </div>

          <div className="links">
            {links.map((link, i) => (
              <a key={i} href={link.href}>
                {link.name.toUpperCase()}
              </a>
            ))}
          </div>

          <div className="buttons">
            <button className="sign-in">Sign In</button>
            <button className="download">
              <svg
                fill="none"
                viewBox="0 0 14 16"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M13.9984.98236c-2.53.35112-5.06001.71507-7.58521 1.10147a3272.65486 3272.65486 0 0 0 0 5.60513C8.9432 7.68094 11.4716 7.64246 14 7.63284c-.0016-2.21736 0-4.43312-.0016-6.65048ZM5.72073 2.19285C3.8112 2.43174 1.90151 2.68506 0 2.97847v4.75217c1.90792.00481 3.81601-.02405 5.72394-.02244-.00161-1.83899-.00161-3.67637-.00321-5.51535ZM5.71896 8.33028C3.81264 8.33348 1.90648 8.30302 0 8.30943v4.76497c1.90792.2582 3.81601.5049 5.72073.7873.00304-1.8438-.00177-3.6876-.00177-5.53142ZM13.9984 8.38319H6.40197c.00321 1.85501.00802 3.70841.01122 5.56201 2.53001.3429 5.06001.6941 7.58521 1.0724 0-2.2125.0032-4.4235 0-6.63441Z"
                  fill="currentColor"
                ></path>
              </svg>
              Download
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
