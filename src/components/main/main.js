// Dependencies
import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import "./main.scss";

// Components
import Card from "./main-components/card/card";

// Images
import phone from "./images/phone.png";
import cleanDesign from "./images/clean-design.png";
import secureData from "./images/secure-data.png";
import retinaReady from "./images/retina-ready.png";

const Main = () => {
  return (
    <div className="container">
      <div className="row main-header">
        <div className="col-lg-6 col-12">
          <div className="logo">AppCo</div>
          <div>
            <p className="main-text">
              <span className="main-text-highlighted">Brainstorming</span> for <br /> desired perfect Usability</p>
            <p className="description-text">
              Our design projects are fresh and simple and will benefit <br />
              your business greatly. Learn more about our work!
            </p>
            <NavLink className="view-stats-link" to="/stats">
              View stats
            </NavLink>
          </div>
        </div>
        <div className="col-6 text-center d-none d-lg-block">
          <img className="phone-image" src={`${phone}`} alt="phone" />
        </div>
      </div>

      <div className="text-center main-text-block">
        <p className="main-question">
          Why <span className="main-question-highlighted">small business owners</span> <br /> <span>love</span> AppCo?
        </p>
        <p className="main-description">
          Our design projects are fresh and simple and will benefit your
          business <br /> greatly. Learn more about our work!
        </p>
      </div>

      <div className="row cards-wrapper text-center">
        <Card
          image={cleanDesign}
          header={"Clean design"}
          description="Increase sales by showing true dynamics of your website."
        />
        <Card
          image={secureData}
          header={"Secure data"}
          description="Build your online store’s trust using Social Proof &
            Urgency."
        />
        <Card
          image={retinaReady}
          header={"Retina ready"}
          description="Realize importance of social proof in customer’s purchase
            decision."
        />
      </div>

      <div className="main-footer">
        <div className="d-flex">
          <div className="subscribeForm input-group mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn btn-outline-secondary" type="button">
              Subscribe
            </button>
          </div>
        </div>


        <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
          <div className="footer-logo">AppCo</div>
          <div className="footer-text">All rights reserved by ThemeTags</div>
          <div className="footer-text">Copyrights © 2019.</div>
        </div>

      </div>
    </div>
  );
};

export default Main;
