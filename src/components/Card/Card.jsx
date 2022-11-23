import React, { useState } from "react";
import "./Card.css";

import { motion, AnimateSharedLayout } from "framer-motion";
// make percent circle progress
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// chart to show draw of percent of increase or decrease
import Chart from "react-apexcharts";

// icon x to close expand  //
import {UilTimes} from "@iconscout/react-unicons"

// here in card include all properties that import in Cards
const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard 
        param={props} 
        setExpanded={() => setExpanded(false)} 
        />
      ) : (
        <CompactCard 
        param={props} 
        setExpanded={() => setExpanded(true)} 
        />
      )}
    </AnimateSharedLayout>
  );
};

// CompactCard -- default card//
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value} </span>
        <span>Last 24 hours </span>
      </div>
    </motion.div>
  );
}
// ExpandedCard when click on card open and show details with x icon to close it again //
function ExpandedCard({param, setExpanded}){
    const data = {
      options: {
        chart: {
          type: "area",
          height: "auto",
        },
        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.35,
        },
        fill: {
          colors: ["fff"],
          type: "gradient",
        },
        dataLabels: {
          enabeled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["white"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        grid: {
          show: true,
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
      },
    };
    return (
      <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
        <div 
        style={{
            cursor:"pointer", 
            alignSelf:"flex-end",
            color:"white"
          }}>
          <UilTimes 
          onClick={setExpanded} 
          />
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
          <Chart 
          series={param.series} 
          type="area"
          options={data.options}
          />
        </div>
        <span>Last 24 hours</span>
        
      </motion.div>
    );
}

export default Card;
