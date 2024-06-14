import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function GreenTea() {
  return (
    <div>
      <Header />
      <div class="content-area">
        <section class="page-section">
          <div class="container">
            <section class="page-section breadcrumbs">
              <div class="container">
                <div class="page-header">
                  <h1
                    style={{
                      padding: "0 0.8em",
                      fontSize: "24px",
                      color: "#5b8353",
                      fontWeight: "400",
                      textTransform: "uppercase",
                      fontFamily:
                        "PlayfairDisplay,Georgia,Times New Roman,serif",
                    }}
                  >
                    Green Tea{" "}
                  </h1>
                </div>
                <hr
                  style={{
                    border: "0",
                    width: "24%",
                    borderTop: "1px solid #1c6f0340",
                    marginTop: "0px",
                  }}
                />
              </div>
            </section>

            <div class="tab-content">
              <div class="tab-pane fade active in" id="tab-2">
                <div class="row">
                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="#">
                          <img
                            src="image/products/greentea/green-tea-bag25.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="#">DG Green Tea</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            25Tea Bags – 50g Net Weight
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 350</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="">
                          <img
                            src="image/products/greentea/green-tea-lose.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="">DG Green Tea</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            100g Net Weight | Loose
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 450</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
