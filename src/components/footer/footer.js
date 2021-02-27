// Dependencies
import React from "react";

// Styles
import "./footer.scss";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="d-flex flex-md-row flex-column justify-content-between align-items-center">
          <div className="logo-footer">
              AppCo
          </div>
          <div className="text-footer">
              All rights reserved by ThemeTags
          </div>
          <div className="text-footer">
              Copyrights © 2019.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
