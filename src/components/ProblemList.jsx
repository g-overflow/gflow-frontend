import React from "react";

import ProblemItem from "./ProItem";

const ProblemList = ({ problems }) => {
  return (
    <ul>
      {problems.map(problem => {
        return <ProblemItem question={problem} key={problem._uid_} />;
      })}
    </ul>
  );
};

export default ProblemList