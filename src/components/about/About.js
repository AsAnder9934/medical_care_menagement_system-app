import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import logo from "./tmp/white_logo_1.png";
import photo from "./tmp/home_background.png";

function About() {
  return (
    <div className="about">
      <div className="top">
        <div className="about_title">About us</div>
        <div className="option">
          <Link to="/log_in">
            <button className="login_panel">Login panel</button>
          </Link>
        </div>
      </div>
      <div className="mid">
        <div className="text_left">
          Malinowski Private Clinics are renowned for their exceptional medical
          services, dedicated to providing personalized and comprehensive
          healthcare. Our clinics boast state-of-the-art facilities and are
          staffed by highly skilled professionals committed to patient-centered
          care. We offer a wide range of specialties, ensuring that every
          patient receives expert attention tailored to their unique needs. From
          routine check-ups to advanced medical treatments, Malinowski Private
          Clinics prioritize your health and well-being. Our compassionate
          approach and cutting-edge technology work in harmony to deliver the
          highest standards of medical excellence. Trust us to be your partner
          in achieving optimal health.
        </div>
        <div className="text_mid">
          Malinowski Private Clinics were founded in the early 1980s by Dr.
          Maćko Malinowski, a visionary physician with a passion for elevating
          healthcare standards. What began as a single clinic in a small
          community quickly garnered a reputation for excellence, largely due to
          Dr. Malinowski's dedication to personalized patient care and his
          relentless pursuit of medical innovation. By the late 1980s, the
          clinic had expanded its services, attracting a broader patient base.
          In the 1990s, recognizing the growing demand for quality healthcare,
          Malinowski Private Clinics embarked on a significant expansion. New
          branches were opened in various locations, each equipped with
          state-of-the-art facilities and staffed by highly skilled medical
          professionals. This period of growth saw the clinics diversify their
          services, introducing specialized departments in cardiology,
          orthopedics, neurology, and pediatrics, among others. These
          advancements were complemented by the adoption of the latest medical
          technologies, ensuring that patients received the best possible care.
          As the new millennium approached, Malinowski Private Clinics continued
          to build on their strong foundation. The early 2000s saw the
          integration of electronic health records, enhancing the efficiency and
          accuracy of patient care. This innovation was part of a broader
          commitment to utilizing cutting-edge technology to improve health
          outcomes. The clinics also launched numerous community health
          initiatives, reflecting their commitment to public health and
          preventive care. Throughout their history, Malinowski Private Clinics
          have remained steadfast in their mission to provide comprehensive and
          compassionate healthcare. This commitment has been recognized through
          numerous awards and accolades, affirming their status as leaders in
          the medical field. The clinics' success is also attributed to their
          continuous investment in staff training and development, ensuring that
          their medical professionals are always at the forefront of the latest
          medical advancements.
        </div>
        <div className="text_bot">
          Today, Malinowski Private Clinics stand as a beacon of medical
          excellence, with a legacy that spans over four decades. They continue
          to honor Dr. Jan Malinowski's vision by providing high-quality,
          patient-centered care and by striving to innovate and improve in all
          aspects of their services. The clinics remain dedicated to their
          founding principles, ensuring that every patient receives the
          personalized attention and cutting-edge treatment they deserve.
        </div>
        <img className="logo_about" src={logo} alt="logo"></img>
      </div>
      <img className="photo_about" src={photo} alt="photo"></img>
      <div className="bot"></div>
    </div>
  );
}
export default About;
