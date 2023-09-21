import React from "react";
import { CounterContainer, CounterPara } from "./counter.style";
import counterData from "../../data/text.json";
import NumberDisplay from "./NumberDisplay";
import { motion } from "framer-motion";

const { title, count } = counterData.home.count;

const Counter = () => {
  return (
    <CounterContainer
      as={motion.div}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 5, duration: 2 }}
    >
      <CounterPara>{title}</CounterPara>
      <NumberDisplay number={count} />
    </CounterContainer>
  );
};

export default Counter;
