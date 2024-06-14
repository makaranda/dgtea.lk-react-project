import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Header />
      <div class="content-area">
        <section class="page-section breadcrumbs">
          <div class="container">
            <div class="page-header">
              <h1
                style={{
                  padding: "0 0.8em",
                  fontSize: "24px",
                  color: "#5b8353",
                  fontWeight: "400",
                  textTtransform: "uppercase",
                  fontFamily: "PlayfairDisplay,Georgia,Times New Roman,serif",
                }}
              >
                About Us
              </h1>
              <hr
                style={{
                  border: "0",
                  width: "24%",
                  borderTop: "1px solid #1c6f0340",
                  marginTop: "0px",
                }}
              />
            </div>
          </div>
        </section>

        <section class="page-section color">
          <div class="container">
            <p
              class="text-center lead"
              style={{
                fontSize: "17px",
                lineHeight: "25px",
                fontWeight: "400",
                color: "#757171",
                paddingLeft: "50px",
                textAlign: "center",
                paddingRight: "50px",
                letterSpacing: "0.4px",
              }}
            >
              DG Labookellie is manufactured using freshly handpicked harvest of
              tea fields that carpet the western slopes of the cool & misty
              central hills of Nuwara Eliya, at elevations exceeding 4,900 feet.
              DG Tea is a subsidiary of Damro Group that manages over 7,000
              acres of lush tea plantations in the Nuwara Eliya region and is
              able to offer a wide array of Ceylon’s finest Teas.
            </p>

            <img src="image/about-us-imgnew.jpg" style={{ width: "100%" }} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
