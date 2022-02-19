import React from "react";
import { HomeWrapper } from "./home.style";
export default function HomeSection() {
  return (
    <HomeWrapper>
      <div class="bg-div"></div>
        <div className="content">
        <div className="general-container">
              <div className="text">
              <h1>
              <span>Howdy, </span>
              I'm Adunola
            </h1>
            <div className="btn-div">
            <button className="button">Download Resume</button>

            </div>
              </div>
          </div>
      </div>
    </HomeWrapper>
  );
}
