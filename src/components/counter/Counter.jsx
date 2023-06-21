import React from "react";
import {
  CounterBox,
  CounterBoxContainer,
  CounterContainer,
  CounterPara,
} from "./counter.style";
import counterData from "../../data/text.json";
import NumberDisplay from "./NumberDisplay";

const { title, count } = counterData.home.count;

const Counter = () => {
  return (
    <CounterContainer>
      <CounterPara>{title}</CounterPara>
      <NumberDisplay number={count} />
    </CounterContainer>
  );
};

export default Counter;
