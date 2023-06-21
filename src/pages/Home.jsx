import React from "react";
import Hero from "../components/hero/Hero";
import Counter from "../components/counter/Counter";
import { PageContainer } from "../components/style/theme";
import Touch from "../components/touch/Touch";
import Service from "../components/service/Service";

const Home = () => {
  return (
    <PageContainer>
      <Hero />
      <Counter />
      <Service />
      <Touch />
    </PageContainer>
  );
};

export default Home;
