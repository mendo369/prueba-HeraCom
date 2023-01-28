import React from "react";

import Plan from "./Plan";

function ListOfPlans({ plans }) {
  return (
    <section className="plans">
      {plans.map((plan) => (
        <Plan plan={plan} />
      ))}
    </section>
  );
}

export default ListOfPlans;
