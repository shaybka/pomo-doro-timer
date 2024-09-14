import React, { useState, useEffect } from "react";

import "./body.scss";

const Body = () => {
  const [activeTab, setActive] = useState("Tab1");
  const [timeLeft, setTimeLeft] = useState(25 * 60); 
  const [isActive, setIsActive] = useState(false);
  const handleClick = (tab) => {
    setActive(tab);
    setIsActive(false);
    switch (tab) {
      case "Tab1":
        setTimeLeft(25 * 60);
        break;
      case "Tab2":
        setTimeLeft(10 * 60);
        break;
      case "Tab3":
        setTimeLeft(15 * 60);
        break;
      default:
        setTimeLeft(25 * 60);
        break;
    }
  };
  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(interval);
          setIsActive(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);
    
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  useEffect(() => {
    if (activeTab === "Tab1") {
      document.title = "Pomodoro";
    } else if (activeTab === "Tab2") {
      document.title = "Short Break";
    } else if (activeTab === "Tab3") {
      document.title = "Long Break";
    }
  }, [activeTab]);

  return (
    <div className="body">
      <div className="containetTabs">
        <div className="tabs">
          <div
            className={activeTab === "Tab1" ? "active" : ""}
            onClick={() => handleClick("Tab1")}
          >
            pomodoro
          </div>
          <div
            className={activeTab === "Tab2" ? "active" : ""}
            onClick={() => handleClick("Tab2")}
          >
            short-break
          </div>
          <div
            className={activeTab === "Tab3" ? "active" : ""}
            onClick={() => handleClick("Tab3")}
          >
            long-break
          </div>
        </div>
        <div className="tabContent">
          {activeTab === "Tab1" && (
            <div className="content">
              <span>
                {formatTime(timeLeft)}
              </span>
             
            </div>
          )}
          {activeTab === "Tab2" && (
            <div className="content">
              <span>
                {formatTime(timeLeft)}
              </span>
             
            </div>
          )}
          {activeTab === "Tab3" && (
            <div className="content">
              <span>
                {formatTime(timeLeft)}
              </span>
              
            </div>
          )}
        </div>
        <button className="btn" onClick={isActive ? stopTimer : startTimer}>
          {isActive ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Body;
