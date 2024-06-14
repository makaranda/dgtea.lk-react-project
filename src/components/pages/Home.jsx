import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import $ from "jquery";
// window.jQuery = $;
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Home = () => {
  const carouselRef = useRef(null);

  //   useEffect(() => {
  //     window.jQuery = $;
  //     require("owl.carousel");
  //     // Initialize Owl Carousel
  //     // $("#main-slider").owlCarousel({
  //     //   loop: true,
  //     //   margin: 10,
  //     //   nav: true,
  //     //   items: 1,
  //     // });

  //     // Cleanup function to destroy the Owl Carousel instance
  //     return () => {
  //       //   if ($(carouselRef.current).data("owl.carousel")) {
  //       //     $(carouselRef.current).owlCarousel("destroy");
  //       //   }
  //     };
  //   }, []);

  return (
    <div>
      <Header />
      <div class="content-area">
        <section class="page-section no-padding slider">
          <div class="container full-width">
            <div class="main-slider">
              <Carousel
                showThumbs={false}
                autoPlay
                infiniteLoop
                interval={5000} // Set the interval to 5 seconds
                transitionTime={1000} // Optional: Set the transition time to 1 second
                stopOnHover
                showArrows={true}
                showStatus={false}
                showIndicators={true}
              >
                <div>
                  <img src="image/slider/slider07.jpg" alt="Slide 1" />
                </div>
                <div>
                  <img src="image/slider/sliders9.jpg" alt="Slide 2" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        <section class="page-section" style={{ paddingTop: "30px" }}>
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="thumbnail no-border no-padding thumbnail-banner size-1x3">
                  <img src="image/leftenquiriesbanner.jpg" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="thumbnail no-border no-padding thumbnail-banner size-1x3">
                  <a href="outlets.php">
                    <img src="image/rightsidebanner.jpg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
