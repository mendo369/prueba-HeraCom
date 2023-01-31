import React, { useState, useEffect } from "react";

import ListOfPlans from "../Components/Plans/ListOfPlans";

import "./Home.css";

function Home() {
  const [plans, setPlans] = useState([]);

  const fetchPlans = () => {
    fetch("public/planes.json")
      .then((res) => res.json())
      .then((plans) => setPlans(plans));
  };

  useEffect(() => {
    // fetchPlans();
    setPlans([
      {
        Name: "Plan Familiar",
        Description: "Lorem impsum dolor sit amet conecticut",
        Price: 60000,
        img: "PlanFamiliar",
        Components: {
          MB: 3,
          Routers: 1,
          MaxConnections: 4,
        },
      },
      {
        Name: "Plan Empresarial",
        Description: "Lorem impsum dolor sit amet conecticut",
        Price: 120000,
        img: "PlanEmpresarial",
        Components: {
          MB: 3,
          Routers: 1,
          MaxConnections: 4,
        },
      },
      {
        Name: "Plan general",
        Description: "Lorem impsum dolor sit amet conecticut",
        Price: 90000,
        img: "",
        Components: {
          MB: 3,
          Routers: 1,
          MaxConnections: 4,
        },
      },
      {
        Name: "Other plan",
        Description: "Lorem impsum dolor sit amet conecticut",
        Price: 0,
        img: "",
        Components: {
          MB: 3,
          Routers: 1,
          "max-connextions": 4,
        },
      },
    ]);
  }, []);
  return (
    <main className="body-app">
      <section className="Header">
        <div className="heracom">heracom</div>
      </section>
      <section className="about-us">
        <div>¿quienes somos?</div>
      </section>
      <section className="Plans">
        <ListOfPlans plans={plans} />
      </section>
    </main>
  );
}

export default Home;
