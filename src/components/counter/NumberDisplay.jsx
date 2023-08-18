import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { CounterBox, CounterBoxContainer } from "./counter.style";

const NumberDisplay = ({ number }) => {
  const COUNTER_DURATION = 4;
  const digits = Array.from(String(number), Number);
  return (
    <CounterBoxContainer>
      {digits.map((digit, index) => (
        <VisibilitySensor
          partialVisibility
          offset={{ bottom: 200 }}
          key={index}
        >
          {({ isVisible }) => (
            <CounterBox key={index}>
              {isVisible ? (
                <CountUp end={digit} duration={COUNTER_DURATION} />
              ) : null}
            </CounterBox>
          )}
        </VisibilitySensor>
      ))}
    </CounterBoxContainer>
  );
};

export default NumberDisplay;
