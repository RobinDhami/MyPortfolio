import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/83270350_603010126938112_7290554994657329152_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=KNWaKz_PwKYAX9Qnw_6&_nc_ht=scontent.fktm16-1.fna&oh=00_AfDGyww73Hu9ujLAZ6t1Mp--526-XUrd7F-SrjSO6cGh_A&oe=6528C05F"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              I am a passionate and dedicated software developer with a strong foundation in web-application development.
              I have honed my skills in building robust and user-friendly software solutions. 
              My expertise includes front-end and back-end technologies such as HTML, CSS, JavaScript, REACT, Express, MongoDB, Node JS , Restful API, where I create responsive and engaging user interfaces.
              Additionally, this allows me to build scalable and efficient server-side components. I have experience working with databases, API integration, and deploying applications to various hosting platforms. 
              Whether it's crafting a pixel-perfect user interface or architecting the backend infrastructure, I am committed to delivering high-quality software that meets both user needs and business goals.
               My passion for learning and staying updated with emerging technologies drives me to continuously improve and innovate.
              I thrive on tackling challenging projects and collaborating with teams to turn ideas into reality.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
