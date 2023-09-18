import React from "react";
import { Container } from "./requirement.style";
import { technician } from "../../data/text";

const Requirement = () => {
  const {
    job,
    title,
    subText,
    titleOptions,
    qualification,
    knowledge,
    competencies,
    rTitle,
    rSubTitle,
    benefit,
    experience,
    flexible,
    location,
    pay,
    schedule,
  } = technician;
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
          <p>{job.dutiesText}</p>
        </div>
        <div className="duties">
          <h3>{qualification.title}</h3>
          <ul>
            {qualification.list.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
        <div className="duties">
          <h3>{knowledge.title}</h3>
          <ul>
            {knowledge.list.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
        <div className="duties" style={{ marginBottom: "0" }}>
          <h3>{competencies.title}</h3>
          <ul>
            {competencies.list.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </ul>
        </div>
        <h5>{subText}</h5>
      </div>
      <div className="right-div">
        <div className="title-wrapper">
          <h4>{rTitle}</h4>
          <p>{rSubTitle}</p>
        </div>
        <div className="list-wrapper">
          <h4>{benefit.title}</h4>
          <ul>
            {benefit.list.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
        </div>
        <div className="list-wrapper">
          <h4>{flexible.title}</h4>
          <ul>
            {flexible.list.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
        </div>
        <div className="list-wrapper">
          <h4>{schedule.title}</h4>
          <ul>
            {schedule.list.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
        </div>
        <div className="list-wrapper">
          <h4>{pay.title}</h4>
          <ul>
            {pay.list.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
        </div>
        <div className="list-wrapper">
          <h4>{experience.title}</h4>
          <ul>
            {experience.list.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
        </div>
        <div className="list-wrapper">
          <h4>{location.title}</h4>
          <ul>
            {location.list.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Requirement;
