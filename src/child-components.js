import React, { useEffect } from "react";

import { useTracking } from "./tracking-react";

const ChildComponent = props => {
  const { tracking } = useTracking();

  useEffect(() => {
    tracking.track("welcome", { seeker_id: 123 });
  }, []);

  const handleOnClick = () => {
    tracking.track("hola", { mati: "yeah" });
    console.log("yeah");
  };

  const handleOnClick2 = () => {
    tracking.track("holis", { gorki: "super yeah" });
  };
  return (
    <div>
      <p>hola bebe</p>
      <button onClick={handleOnClick}>Presioname!</button>
      <button onClick={handleOnClick2}>Presioname!</button>
    </div>
  );
};

export default ChildComponent;