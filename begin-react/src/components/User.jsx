import React from "react";
import "../styles/User.css";

export default function User({ img, name, job, align }) {
  return (
    <div className="user">
      <div
        className={align === "right" ? "user-box flexDirection" : "user-box"}
      >
        <div className="user-img">
          <img src={img} alt="Cat" />
        </div>
        <div style={{ width: "80px" }}></div>
        <div className="user-profile">
          <div>
            <h1>{name}</h1>
            <p>💻 {job}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
