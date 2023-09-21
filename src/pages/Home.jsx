import React from "react";
import Hero from "../components/hero/Hero";
import Counter from "../components/counter/Counter";
import { PageContainer } from "../components/style/theme";
import Touch from "../components/touch/Touch";
import Service from "../components/service/Service";
import HomeSafety from "../components/homeSafety/HomeSafety";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <PageContainer as={motion.div} layout>
      <Hero />
      <Counter />
      <Service />
      <HomeSafety />
      <Touch />
    </PageContainer>
  );
};

export default Home;
