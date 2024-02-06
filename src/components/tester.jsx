import React from "react";

const Tester = ({ title, description }) => {
  return (
    <>
      <h2>
        This is a test <b>{title}</b>
      </h2>
      <p>{description}</p>
    </>
  );
};

export default Tester;
