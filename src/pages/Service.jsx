import React from "react";
import { Container, PageContainer } from "../components/style/theme";
import ServiceOffer from "../components/serviceOffer/ServiceOffer";
import BuildService from "../components/buildService/BuildService";

const Service = () => {
  return (
    <PageContainer>
      <ServiceOffer />
      <BuildService />
    </PageContainer>
  );
};

export default Service;
