import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { AnimatePresence, motion } from "framer-motion";

const Root = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.header key="header">
        <Navbar />
      </motion.header>
      <motion.main key="main">
        <Outlet />
      </motion.main>
      <motion.footer key="footer">
        <Footer />
      </motion.footer>
    </AnimatePresence>
  );
};

export default Root;
