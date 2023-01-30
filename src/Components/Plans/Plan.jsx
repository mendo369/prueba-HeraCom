import React from "react";

import ImgPrueba from "../../assets/878719.png";

function Plan({ plan }) {
  return (
    <div className="plan">
      <div className="card">
        <div className="card-image">
          <img src={ImgPrueba} alt="plan image" />
        </div>
        <div className="plan-components">
          <ul className="plan-list-components">
            <li>{plan.Components.MB} MB</li>
            <li>{plan.Components.Routers} Router</li>
            <li>
              {plan.Components.MaxConnections} dispositivos maximos conectados
            </li>
          </ul>
        </div>
      </div>
      <div className="info">
        <h1 className="plan-name">{plan.Name}</h1>
        <span className="plan-price">${plan.Price}</span>
        <p className="plan-description">
          {plan.Description} Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Corrupti sit corporis cumque expedita nostrum ipsum?
          Consequuntur excepturi, nihil accusantium debitis ex totam animi
          aspernatur molestias harum deserunt culpa. Quas, eligendi.
        </p>

        <div className="buttons">
          <button>Contratar</button>
        </div>
      </div>
    </div>
  );
}

export default Plan;
