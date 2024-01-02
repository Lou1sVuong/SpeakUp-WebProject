import React from "react";
import styles from "./Contact.module.css";
import Banner from "../../Components/Banner/Banner";
import Phone from "../../Assets/ComponentSVG/Phone";
import Location from "../../Assets/ComponentSVG/Location";
import Email from "../../Assets/ComponentSVG/Email";
import Input from "../../Components/Common/Input/Input";
import Button from "../../Components/Common/Button/Button";
import TextArea from "../../Components/Common/TextArea/TextArea";
import MapEmbed from "../../Components/MapEmbed";
import useScrollToTop from "../../Hooks/useScrollToTop";
function Contact() {
  useScrollToTop();
  const heading = "Get in Touch";
  const para =
    "Feel free to contact us any time. we will get back to you as soon as we can !";
  return (
    <div>
      <Banner heading={heading} para={para} center />
      <div className={styles.contactMain}>
        <div className={styles.contactBox}>
          <div className={styles.contactCard}>
            <Phone />
            <h3>Give us a call</h3>
            <p>+92 333 3333333</p>
            <p>+92 333 3333333</p>
          </div>
          <div className={styles.contactCard}>
            <Location />
            <h3>Our main office</h3>
            <p>Agiou Markou 15, Athina 105 60, UK.</p>
          </div>
          <div className={styles.contactCard}>
            <Email />
            <h3>Send us a email</h3>
            <p>mail@speakup.com</p>
          </div>
        </div>
        <div className={styles.contactForm}>
          <div className={styles.row}>
            <h1>How May We Help You !</h1>
          </div>
          <div className={styles.row}>
            <Input type="text" width="100%" placeholder="Name" />
            <Input type="text" width="100%" placeholder="Email" />
          </div>
          <div className={styles.row}>
            <Input type="text" width="100%" placeholder="Subject ...." />
          </div>
          <div className={styles.row}>
            <TextArea
              type="text"
              width="100%"
              placeholder="Write your problem ...."
            />
          </div>
          <div className={styles.row}>
            <Button primary width="40%" heading="7.125rem">
              Send Massage
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.map}>
        <MapEmbed />
      </div>
    </div>
  );
}

export default Contact;
