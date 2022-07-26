import React, { useEffect, useState, useCallback } from "react";
import "./styles.css";
import Text from "./Text";

export default function App() {

  // const [slavePercentage, setSlavePercentage] = useState(0);
  //("#slave") - for ID
   // document.querySelectorAll(".slave") - for Classname/ ID in differnt componentS
  const handleSlaveScroll = (e) => {
     console.log(e.target.parentNode.querySelectorAll(".slave")); 
    let slave = e.target;
    let master = e.target.parentNode.querySelectorAll(".slave");
    master.forEach(function(master) {
        
      let height = slave.scrollHeight - slave.clientHeight;
      let percentage = (slave.scrollTop / height) * 100;
      let masterHeight = master.scrollHeight - master.clientHeight;
      // console.log(slave.scrollTop)
      let newMasterPosition = (slave.scrollTop / height) * masterHeight;
      // setSlavePercentage(percentage);
      master.scroll({
        top: newMasterPosition
      });
    });
  };

  // console.log("reload");
  // console.log("master", masterPercentage);
  // console.log("slave", slavePercentage);

  return (
    <div className="app">
       <div className="app">
      <div onScroll={handleSlaveScroll} className="slave">
        "first"
        <Text />
      </div>
      </div>
      
      <div className="app">
      <div onScroll={handleSlaveScroll} className="slave">
        <Text />
      </div>
      </div>
  
    </div>
  );
}
