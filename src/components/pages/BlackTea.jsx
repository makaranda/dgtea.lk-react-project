import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function BlackTea() {
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
                    Black Tea
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
                            src="image/products/blacktea/black-tea-tea-bag25.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="#">Ceylon Black Tea</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            25Tea Bags – 50g Net Weight
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 290</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="#">
                          <img
                            src="image/products/blacktea/labookellie-SB-200-kg-latest1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="#">Labookellie Special Blend</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            200g Net Weight | Loose
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 640</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="#">
                          <img
                            src="image/products/blacktea/helaboda-100g-latest1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="#">Helboda Fresh Tea</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            100g Net Weight | Loose
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 260</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="#">
                          <img
                            src="image/products/blacktea/black-tea-tea-bag50.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="#">Ceylon Black Tea</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            50Tea Bags – 100g Net Weight
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 560</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="#">
                          <img
                            src="image/products/blacktea/labookellie-SB-500g-latest1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="#">Labookellie Special Blend</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            500g Net Weight | Loose
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 1,570</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="#">
                          <img
                            src="image/products/blacktea/helaboda-500g-latest1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="#">Helboda Fresh Tea</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            500g Net Weight | Loose
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 1,290</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="#">
                          <img
                            src="image/products/blacktea/black-tea-tea-bag100.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="#">Ceylon Black Tea</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            100Tea Bags – 200g Net Weight
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 1060</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="#">
                          <img
                            src="image/products/blacktea/labookellie-SB-1kg-latest1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="#">Labookellie Special Blend</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            1Kg Net Weight | Loose
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 3,060</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="#">
                          <img
                            src="image/products/blacktea/helaboda-1kg-latest1.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="#">Helboda Fresh Tea</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            1Kg Net Weight | Loose
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 2,530</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="">
                          <img src="image/products/blacktea/BOP.jpg" alt="" />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="">DG Labookellie BOP</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            200g Net Weight | Loose
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 630</ins>
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
                            src="image/products/blacktea/SK-400g.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="">DG Labookellie Supiri Kahata</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            400g Net Weight | Loose
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 1010</ins>
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
                            src="image/products/blacktea/SK-200g.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="">DG Labookellie Supiri Kahata</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            200g Net Weight | Loose
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 520</ins>
                        </div>
                        <div class="buttons"></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4 col-sm-6">
                    <div class="thumbnail no-border no-padding">
                      <div class="media">
                        <a href="">
                          <img src="image/products/blacktea/BOPF.jpg" alt="" />
                        </a>
                      </div>
                      <div class="caption text-center">
                        <h4 class="caption-title">
                          <a href="">DG Labookellie BOPF</a>
                        </h4>
                        <div class="rating">
                          <p style={{ textAlign: "center" }}>
                            200g Net Weight | Loose
                          </p>
                        </div>
                        <div class="price">
                          <ins style={{ fontSize: "18px" }}>Rs. 630</ins>
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
