import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

export const App = () => {
  return (
    <div className="wrap">
      <div className="icon_area">
        <TwitterIcon className="icon" />
        <span className="icon_text">Twitter</span>
      </div>
      <hr />
      <div className="icon_area">
        <InstagramIcon className="icon" />
        <span className="icon_text">Instagram</span>
      </div>
      <hr />
      <div className="icon_area">
        <EmailIcon className="icon" />
        <span className="icon_text">メールアドレス</span>
      </div>
      <hr />
    </div>
  );
};
