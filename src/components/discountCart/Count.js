import React, { useState } from "react";
import Clock from "./Clock";

const Count = () => {
  const [deadline, setdeadline] = useState("March, 24, 2021");
  return (
    <div>
      <Clock deadline={deadline} />
    </div>
  );
};

export default Count;
