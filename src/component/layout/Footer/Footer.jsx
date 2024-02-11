import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineVideoLibrary } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Our Projects</h4>
        <p>(Our Music Videos)</p>
        <a href="https://fb.watch/q8H6iI7_wj/" target="_blank">
          <MdOutlineVideoLibrary /> শহর আমার জলপাইগুড়ি
        </a>
        <a href="https://fb.watch/q8HjBKCk4n/" target="_blank">
          <MdOutlineVideoLibrary /> মণিহার
        </a>
      </div>

      <div className="midFooter">
        <img
          src="https://msit.edu.in/assets/images/msit/1532413851_Sargam_Logo_thumb.jpg"
          alt="logo"
        />
        <a href="/"><h1>SARGAM MUSICAL STORE</h1></a>
        <p>D.B.C Road /Kamar para, Jalpaiguri, West Bengal</p>

        <a href="tel:+918967764501">
          <BiSolidPhoneCall /> Contact Now
        </a>

        <p style={{ fontSize: "0.9vmax" }}>
          Copyrights 2024 &copy; Two Wheel Dev
        </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/sargamjpg" target="_blank">
          <FaFacebook /> Facebook
        </a>
        <a
          href="https://www.instagram.com/sargam.musicals?igsh=MXZwdTY1M2swdms="
          target="_blank"
        >
          <FaInstagram /> Instagram
        </a>
        <a href="https://www.facebook.com/somnath.majumder.56" target="_blank">
          <FaFacebook /> Somnath Majumdar
        </a>
        <a href="https://www.facebook.com/surajit.goswami.50" target="_blank">
          <FaFacebook /> Surajit Goswami
        </a>
      </div>
    </footer>
  );
};

export default Footer;
