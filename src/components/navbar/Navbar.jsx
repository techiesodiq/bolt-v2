import React, { useState } from "react";
import { MdDensitySmall } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import {
  NavContainer,
  NavImage,
  NavListLink,
  NavList,
  NavMenu,
  MobileIcon,
} from "./navbar.style";
import logo from "../../asset/IMG-20230216-WA0009 1.png";
import { navData } from "../../data/navlist";
import { motion } from "framer-motion";

const Navbar = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => setClose(!close);

  return (
    <NavContainer
      as={motion.div}
      variants={{
        visible: { top: 0, opacity: 1, backgroundColor: "#fff" },
        hidden: { top: "-100%", opacity: 0, backgroundColor: "#000" },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5 }}
    >
      <NavImage
        src={logo}
        as={motion.img}
        variants={{
          visible: { x: 0, opacity: 1 },
          hidden: { x: "-100%", opacity: 0 },
        }}
      />
      <MobileIcon onClick={handleClose}>
        {!close ? <MdDensitySmall /> : <AiOutlineClose />}
      </MobileIcon>

      <NavMenu
        onClick={handleClose}
        close={close}
        as={motion.ul}
        variants={{
          visible: { transition: { staggerChildren: 0.5 }, duration: 1 },
        }}
      >
        {navData.map((nav) => (
          <NavList
            key={nav.id}
            as={motion.li}
            variants={{
              visible: { opacity: 1, scale: [0.3, 1], right: 0 },
              hidden: { opacity: 0, scale: 0.1, right: "-100%" },
            }}
            transition={{ delay: 1, duration: 1 }}
          >
            <NavListLink to={nav.path}>{nav.title}</NavListLink>
          </NavList>
        ))}
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
