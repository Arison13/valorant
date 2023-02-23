import React, { useState } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header className="navbar">
      {isMobile ? (
        <MdOutlineClose
          onClick={() => {
            setIsMobile(false);
          }}
          className="mobile-menu-btn"
        />
      ) : (
        <FaBars
          onClick={() => {
            setIsMobile(true);
          }}
          className="mobile-menu-btn"
        />
      )}

      <div className="navbar-title">
        <h4 className="nav-title">Valorant For Noobs</h4>
      </div>

      <ul className="navbar-right">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/agents">Agents</Link>
        </li>
        <li>
          <Link to="/maps">Maps</Link>
        </li>
        <li>
          <Link to="/match">Look Up Match</Link>
        </li>
      </ul>

      <ul className={`mobile-navbar ${isMobile ? "nav-open" : "nav-close"}`}>
        <li
          onClick={() => {
            setIsMobile(false);
          }}>
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => {
            setIsMobile(false);
          }}>
          <Link to="/agents">Agents</Link>
        </li>
        <li
          onClick={() => {
            setIsMobile(false);
          }}>
          <Link to="/maps">Maps</Link>
        </li>
        <li
          onClick={() => {
            setIsMobile(false);
          }}>
          <Link to="/match">Look Up Match</Link>
        </li>
      </ul>
    </header>
  );
}
