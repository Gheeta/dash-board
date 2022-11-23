import React, { useState } from "react";
import "./Sidebar.css";

import Logo from "../../imgs/logo.png";
// import {UilEstate} from "@iconscout/react-unicons"

import { SidebarData } from "../../Data/DataIcon";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";

import {motion} from "framer-motion";
import { style } from "@mui/system";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants={
    true:{
      left:0
    },
    false:{
      left: "-60%"
    },
  }
  return (
    <>
      <div 
        className="bars" 
        style={expanded ? { left: "60%" } :
        { left: "5%" } }
        onClick={()=>setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div 
        className="Sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${expanded}` : " "}
        >
        
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="" />
          <span>
            Gh<span>ee</span>ta 
            Sh<span>o</span>ps
          </span>
        </div>

        {/* Menue */}
        <div className="menue">
          {SidebarData.map((item, index) => {
            return (
              <div
                className={
                  selected === index ? "menue-item active" : "menue-item"
                }
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
          {/* SignOut*/}
          <div className="menue-item ">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
