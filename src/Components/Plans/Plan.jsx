import React from "react";

function Plan({ plan }) {
  return (
    <div className="plan">
      <div className="info">{plan.Description}</div>
      <div className="image">
        <img src={plan.img} alt="image" />
      </div>
    </div>
  );
}

export default Plan;
