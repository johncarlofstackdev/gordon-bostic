import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faAmazon, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { useNavigation } from "@/context/globalStateContext";
import Styles from "@/styles/includes/footer.module.css";
import Overlay from "@/includes/footer/overlay";

const Footer: React.FC = () => {
  const { isNavigationVisible, hideNavigation } = useNavigation();

  return (
    <>
      <footer className={Styles.section} id="contact-me">
        <div className={Styles.container}>
          <h1>Contact <span>Me</span></h1>
          <p>Please feel free to contact me with any questions or thoughts. I’ll get back to you as soon as I can.</p>
          <form id="contact" className={Styles["form-wrapper"]}>
            <div className={Styles["form-group"]}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" className={Styles["form-control"]} placeholder="Enter your Name" />
            </div>
            <div className={Styles["form-group"]}>
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email" className={Styles["form-control"]} placeholder="E-mail" />
            </div>
            <div className={Styles["form-group"]}>
              <label htmlFor="Message">Message</label>
              <textarea name="Message" id="Message" rows={10} className={Styles["form-control"]} placeholder="Enter your Message"></textarea>
            </div>
            <button>Send Message</button>
          </form>
          <h3>Follow Me</h3>
          <div className={Styles.socials}>
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faAmazon} /></a>
            <a href="#"><FontAwesomeIcon icon={faPinterest} /></a>
          </div>
          <p>© Copyright 2023 <b>Gorndon <span>Bostic</span></b>. All Rights Reserved.</p>
        </div>
      </footer>
      <Overlay
        isNavigationVisible={isNavigationVisible}
        hideNavigation={hideNavigation}
        Overlay={Styles.overlay}
      />
    </>
  );
};

export default Footer;
