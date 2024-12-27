"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css"; // Import custom styles
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer
      className={`bg-dark ${styles.footerBackground} text-white text-start`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Image
              src="/assets/Logo/IconWhite.svg"
              width={120}
              height={120}
              alt="Lanstitut Logo"
            />
            <h5 className={styles.logoTitle}>Lanstitut</h5>

            <h6 className="mt-5">Connect with Us</h6>
            <div className="d-flex gap-2 py-3">
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon size="2x" icon={faTwitter} />
              </a>
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon size="2x" icon={faInstagram} />
              </a>
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon size="2x" icon={faYoutube} />
              </a>
              <a href="#" className="text-white me-2">
                <FontAwesomeIcon size="2x" icon={faLinkedinIn} />
              </a>
            </div>
            <p className={styles.footerText}>
              © 2024 Lanstitut. All rights reserved.
            </p>
          </div>
          {/* <div className="col-md-2">
            <h5>Links</h5>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#">Home</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">Get Started</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">Services</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">Portfolio</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">Corporate</a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5>Others</h5>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}>
                <a href="#">Terms of Service</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">Privacy Policy</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">Something goes here</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">Portfolio</a>
              </li>
              <li className={styles.linkItem}>
                <a href="#">Corporate</a>
              </li>
            </ul>
          </div> */}
          <div className="col-md-4">
            <h6>Bangalore</h6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.220133088917!2d77.7093324!3d12.957761099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1375b902f2bb%3A0x4f2edf61c7c95da4!2sLanstitut%20Language%20Learning!5e0!3m2!1sen!2sin!4v1735309871285!5m2!1sen!2sin"
              width="100%"
              height="150"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <h6 className="mt-3">Kozhikode</h6>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.220133088917!2d77.7093324!3d12.957761099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1375b902f2bb%3A0x4f2edf61c7c95da4!2sLanstitut%20Language%20Learning!5e0!3m2!1sen!2sin!4v1735309871285!5m2!1sen!2sin"
              width="100%"
              height="150"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
