import React, { useState, useEffect } from "react";

import ListOfPlans from "../Components/Plans/ListOfPlans";

import "./Home.css";

function Home() {
  const [plans, setPlans] = useState([]);

  const fetchPlans = () => {
    fetch("../../public/planes.json")
      .then((res) => res.json())
      .then((plans) => setPlans(plans));
  };

  useEffect(() => {
    fetchPlans();
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
