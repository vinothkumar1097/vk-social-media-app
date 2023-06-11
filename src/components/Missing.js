import React from "react";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <section className="px-3 flex-column text-center">
      <p>Invalid link</p>
      <p>
        <Link to="/">Visit Homepage</Link>
      </p>
    </section>
  );
};

export default Missing;
