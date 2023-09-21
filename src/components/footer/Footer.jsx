import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import {
  FooterBox,
  FooterContainer,
  FooterIcon,
  FooterIconContainer,
  FooterImg,
  FooterLink,
  FooterList,
  FooterLogoContainer,
  FooterMenu,
  FooterPara,
  MobileIcon,
} from "./footer.style";
import logo from "../../asset/IMG-20230216-WA0009 1.png";
import { Link } from "react-router-dom";
import { footerData } from "../../data/navlist";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <FooterContainer
      as={motion.div}
      initial={{ background: "#fff" }}
      whileInView={{
        background: "#000",
        transition: { duration: 2 },
      }}
      viewport={{ once: true }}
    >
      <FooterBox>
        <FooterLogoContainer>
          <FooterImg src={logo} />
          <FooterIconContainer>
            <Link>
              <FooterIcon>
                <FaFacebookF />
              </FooterIcon>
            </Link>
            <Link>
              <FooterIcon>
                <FaTwitter />
              </FooterIcon>
            </Link>
            <Link>
              <FooterIcon>
                <FaLinkedinIn />
              </FooterIcon>
            </Link>
            <Link>
              <FooterIcon>
                <FaInstagram />
              </FooterIcon>
            </Link>
          </FooterIconContainer>
        </FooterLogoContainer>
        <FooterMenu direction="column" border="0.5px" pt="20px" pb="56px">
          {footerData.map((data) => (
            <FooterList key={data.id}>
              <FooterLink to={data.path} color={"#475467"}>
                {data.title}
              </FooterLink>
            </FooterList>
          ))}
        </FooterMenu>
        <FooterLogoContainer pt="30px">
          <FooterPara>
            2023.Bolt telecommunications. All rights reserved
          </FooterPara>
          <FooterMenu direction="row" border={0} pt="0px" pb="0px">
            {footerData.map((data) => (
              <FooterList key={data.id}>
                <FooterLink to={data.path} color="#667085">
                  {data.title}
                </FooterLink>
              </FooterList>
            ))}
          </FooterMenu>
        </FooterLogoContainer>
        <FooterIconContainer>
          <Link>
            <MobileIcon>
              <FaFacebookF />
            </MobileIcon>
          </Link>
          <Link>
            <MobileIcon>
              <FaTwitter />
            </MobileIcon>
          </Link>
          <Link>
            <MobileIcon>
              <FaLinkedinIn />
            </MobileIcon>
          </Link>
          <Link>
            <MobileIcon>
              <FaInstagram />
            </MobileIcon>
          </Link>
        </FooterIconContainer>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
