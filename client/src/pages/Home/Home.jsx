import React from "react";

import { Header } from "../../components/Header/Header";
import { About } from "../../components/About/About";
import { Footer } from "../../components/Footer/Footer";
import { Contact } from "../../components/Contact/Contact";
import { Subscription } from "../../components/Subscription/Subscription";
import { Review } from "../../components/Review/Review";
import { Carousel } from "../../components/Carousel/Carousel";
import { WhyCard } from "../../components/Card/WhyCard";

export const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <WhyCard />
      <Carousel />
      <Review />
      <Subscription />
      <Contact />
      <Footer />
    </div>
  );
};
