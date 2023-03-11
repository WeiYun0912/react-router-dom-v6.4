import React from "react";
import { Link, useRouteLoaderData } from "react-router-dom";

const HomePage = () => {
  const data = useRouteLoaderData("root");
  console.log(data);
  return (
    <div>
      <h1>Home</h1>
      <p>
        Go to <Link to="/products">products</Link>
      </p>
      <p>
        Go to <Link to="/products/add">add product</Link>
      </p>
    </div>
  );
};

export default HomePage;
