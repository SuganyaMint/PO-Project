import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Link to="/adddata">
        <button>Add data</button>
      </Link>
    </>
  );
}

export default HomePage;
