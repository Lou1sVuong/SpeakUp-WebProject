import React from "react";
import styles from "./About.module.css";
import Banner from "../../Components/Banner/Banner";
import LanguageBox from "../../Components/LanguageBox/LanguageBox";
import UsaFlag from "../../Assets/ComponentSVG/UsaFlag";
import Button from "../../Components/Common/Button/Button";
import Image01 from "../../Assets/Image/About/image01.png";
import Image02 from "../../Assets/Image/About/image02.png";
import Image03 from "../../Assets/Image/About/image03.png";
import Image04 from "../../Assets/Image/About/Image4.svg";
import useScrollToTop from "../../Hooks/useScrollToTop";
import FranceFlag from "../../Assets/ComponentSVG/FranceFlag";
import GermanyFlag from "../../Assets/ComponentSVG/GermanyFlag";
import TurkishFlag from "../../Assets/ComponentSVG/TurkishFlag";
function About() {
  useScrollToTop();
  const languages = [
    { icon: <UsaFlag />, name: "English" },
    { icon: <FranceFlag />, name: "France" },
    { icon: <GermanyFlag />, name: "Germany" },
    { icon: <TurkishFlag />, name: "Turkish" },
  ];
  const heading = "About Speak Up";
  const para =
    "SpeakUp is a ground-breaking app for learning  English , Turkish , France words and improving vocabulary for all speakers of English, from native speakers to beginner learners.It makes language learning more accessible to everyone around the globe.";

  return (
    <div>
      <Banner heading={heading} para={para} />
      <section className={styles.About}>
        <div className={styles.content}>
          <h2>
            Speak Up exists to empower people through languages. Whether you’re
            learning for a new job, new love or simply a new skill, your path to
            fluency starts here.
          </h2>
          <h3>How Speak Up works:</h3>
          <ul>
            <li className={styles.highlight}>Self-paced study</li>
            <li className={styles.p}>
              Complete your personalised Study Plan, and get friendly reminders
              when it’s time to learn using our expertly designed lessons.
              Benefit from the smart technology in our Review section, which
              highlights what to revise and when. Self-paced studying works
              because you’re in control.
            </li>
          </ul>
          <div className={styles.LanguageBox}>
            {languages.map((language, index) => (
              <LanguageBox
                key={index}
                icon={language.icon}
                name={language.name}
              />
            ))}
          </div>
        </div>
        <div className={styles.introduct}>
          <div className={styles.row}>
            <div className={styles.col}>
              <h3>
                The accurate English test with <br />
                fast results
              </h3>
              <p className={styles.p2}>
                SPEAK UP is a quick and convenient online test to help higher
                education institutions and employers check the English levels of
                individuals and groups of candidates. It combines the latest AI
                technology with the reliability and quality you expect from
                Speak Up.
              </p>
            </div>
            <div className={styles.col}>
              <img src={Image01} alt=" " />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <img src={Image02} alt=" " />
            </div>
            <div className={styles.col}>
              <h3>Our path to learning English, step by step</h3>
              <p>
                effective and rewarding. Our unique approach encourages
                continuous progression with a clear path to improve language
                skills. We have qualifications for schools, general and higher
                education, and business.
              </p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.col}>
              <h3>Together we inspire learners to go further</h3>
              <p className={styles.p2}>
                Our range of free teaching resources, lesson plans and
                activities is designed to help you prepare your students for our
                exams and tests. We also have a range of teaching
                qualifications, courses and support to help you develop as a
                teacher.
              </p>
            </div>
            <div className={styles.col}>
              <img src={Image03} alt=" " />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <h3>Motivate others: </h3>
          <ul>
            <li className={styles.p1}>
              Interacting with members of the <span>Speak Up</span> Community
              enables you to learn together by sharing knowledge of your native
              language. Correct the work of others, and have your exercises
              reviewed in return. Make genuine connections through language.
            </li>
          </ul>
          <img src={Image04} alt="" className={styles.imgSVG} />

          <div className={styles.btnLearning}>
            <Button primary width="35%">
              Start Learning
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
