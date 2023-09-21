import React from "react";
import "../styles/Round.css";

export default function Round({ color }) {
  return <div className="roundBack" style={{ backgroundColor: color }}></div>;
}
