import React from "react";
import { Container } from "./requirement.style";
import { technician } from "../../data/text";

const Requirement = () => {
  const { job, title, titleOptions } = technician;
  return (
    <Container>
      <div className="left-div">
        <h2 className="title">{title}</h2>
        <div className="title-wrapper">
          {titleOptions.map((option, index) => (
            <h4 key={index}>
              {option.title} <span> {option.description}</span>
            </h4>
          ))}
        </div>
        <div className="job-wrapper">
          <div className="title-wrapper">
            <h3>{job.title}</h3>
            <h5>{job.subTitle}</h5>
          </div>
          <p>{job.description}</p>
        </div>
        <div className="duties">
          <h3>{job.duties}</h3>
          <ul>
            {job.dutiesList.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-div"></div>
    </Container>
  );
};

export default Requirement;
