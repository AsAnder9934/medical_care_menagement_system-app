import React from "react";
import "./Staff_db_dashboard.css";
import { Link } from "react-router-dom";
import database_services from "./tmp/uslugi.png";
import database_map from "./tmp/mapa.png";
import database_view from "./tmp/widok.png";
import MediaCard from "./Staff_card";

function Staff_db_dashboard() {
  const input_list = [
    {
      name: "SZPITAL",
      surname: "Kliniczny w Leśnej Górze",
      content: "Odziały: Położniczy, COVID",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },

    {
      name: "Maciej",
      surname: "Malinowski",
      content: "jakiś opis",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },
    {
      name: "Wojciech",
      surname: "Oleksy",
      content: "jakiś opis",
      image:
        "https://marcinbiodrowski.com/wp-content/uploads/2018/03/dlaczego-warto-miec-dobre-zdjecie-w-CV.jpg",
    },
  ];
  return (
    <div className="staff_db_dashboard">
      <div className="patient_db_top">
        <div className="service_title">Staff database</div>
        <div className="services_line"></div>
        <div className="database_menu">
          <Link to="/log_in/services/staff">
            <img
              className="database_services"
              src={database_services}
              alt="database_services"
            ></img>
          </Link>
          <Link to="/log_in/services/staff/map">
            <img
              className="database_map"
              src={database_map}
              alt="database_map"
            ></img>
          </Link>
          <Link to="/log_in/services/staff/db">
            <img
              className="database_view"
              src={database_view}
              alt="database_view"
            ></img>
          </Link>
        </div>
      </div>
      <div className="card_mid">
        {input_list.map((item) => {
          return (
            <MediaCard
              name={item.name}
              surname={item.surname}
              content={item.content}
              image={item.image}
            />
          );
        })}
        <MediaCard />
      </div>
    </div>
  );
}
export default Staff_db_dashboard;
