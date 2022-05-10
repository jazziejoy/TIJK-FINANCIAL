import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundCalculator.js";
import Features from "components/features/VerticalWithAlternateImageAndText.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImage.js";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import AboutUs from "pages/AboutUs";


export default () => (
  <AnimationRevealPage>
    <Hero />
    <Footer />
  </AnimationRevealPage>
);