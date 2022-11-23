import React from "react";
import "./MainDash.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const MainDash = () => {
  return (
    <div className="main-dash">
      <h1>DashBoard</h1>
      <Cards/>
      <Table/>
    </div>
  );
};

export default MainDash;
