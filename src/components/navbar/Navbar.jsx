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

const Navbar = () => {
  const [close, setClose] = useState(false);

  const handleClose = () => setClose(!close);

  return (
    <NavContainer>
      <NavImage src={logo} />
      <MobileIcon onClick={handleClose}>
        {!close ? <MdDensitySmall /> : <AiOutlineClose />}
      </MobileIcon>

      <NavMenu onClick={handleClose} close={close}>
        {navData.map((nav) => (
          <NavList key={nav.id}>
            <NavListLink to={nav.path}>{nav.title}</NavListLink>
          </NavList>
        ))}
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
