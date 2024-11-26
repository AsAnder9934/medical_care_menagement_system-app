import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Patient_db_address.css";
import { Link, useParams } from "react-router-dom";

function Patient_db_address() {
  const { pesel } = useParams();
  const [patientData, setPatientData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    pesel: "",
    pictureUrl: "",
    lat: "",
    long: "",
    street: "",
    zip: "",
    city: "",
    history: "",
    date: "",
    hospital: "",
    doctor: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/geoserver/Hospital/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Hospital%3Ahospitalss&outputFormat=application%2Fjson&cql_filter=pesel='${pesel}'`
      )
      .then((response) => {
        console.log("API response:", response.data);
        const data = response.data;
        if (data.features && data.features.length > 0) {
          const patient = data.features[0].properties;
          setPatientData({
            name: patient.imie_i_naz,
            phoneNumber: patient.telefon,
            email: patient.email,
            pesel: patient.pesel,
            pictureUrl: patient.zdjecie,
            lat: patient.szerokosc,
            long: patient.dlugosc,
            street: patient.ulica,
            zip: patient.kod,
            city: patient.poczta,
            history: patient.historia,
            date: patient.data,
            hospital: patient.szpital,
            doctor: patient.lekarz,
          });
        } else {
          console.error("No patient data found in the response");
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the patient data!", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving patient data:", patientData);

    axios
      .put(
        `http://localhost:8080/geoserver/Hospital/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=Hospital%3Ahospitalss&outputFormat=application%2Fjson&cql_filter=pesel='${pesel}'`,
        patientData,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        setIsEditing(false);
      })
      .catch((error) => {
        console.error("There was an error updating the patient data!", error);
      });
  };

  return (
    <div className="patient_db_contact">
      <div className="patient_db_contact_top">
        <div className="patient_db_contact_name">
          Patient:{" "}
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={patientData.name}
              onChange={handleChange}
            />
          ) : (
            patientData.name
          )}
        </div>
        <button className="patient_db_contact_add">Add new</button>
        <div className="patient_db_contact_menu">
          <Link
            to={`/log_in/services/patients/db/contact/${patientData.pesel}`}
          >
            <button className="patient_data2">Patient data</button>
          </Link>
          <button className="patient_addresses2">Addresses</button>
          <Link
            to={`/log_in/services/patients/db/history/${patientData.pesel}`}
          >
            <button className="patient_history">Medical history</button>
          </Link>
          <Link
            to={`/log_in/services/patients/db/hospital/${patientData.pesel}`}
          >
            <button className="patient_doctor">Assigned doctor/hospital</button>
          </Link>
        </div>
      </div>
      <div className="patient_db_contact_mid">
        <div className="patient_db_contact_left">
          <table>
            <tbody>
              <div className="type">Address</div>
              <line className="main_line" />
              <line className="submain_line1" />
              <line className="submain_line2" />
              <line className="submain_line3" />
              <tr className="patient_db_phone">
                <td>Street and number: </td>
                <td className="patient_db_phone2">
                  {isEditing ? (
                    <input
                      type="text"
                      name="street"
                      value={patientData.street}
                      onChange={handleChange}
                    />
                  ) : (
                    patientData.street
                  )}
                </td>
              </tr>
              <tr className="zip_code">
                <td>Zip code:</td>
                <td className="patient_db_email2">
                  {isEditing ? (
                    <input
                      type="text"
                      name="zip"
                      value={patientData.zip}
                      onChange={handleChange}
                    />
                  ) : (
                    patientData.zip
                  )}
                </td>
              </tr>
              <tr className="patient_db_pesel">
                <td>Post:</td>
                <td className="patient_db_pesel2">
                  {isEditing ? (
                    <input
                      type="text"
                      name="city"
                      value={patientData.city}
                      onChange={handleChange}
                    />
                  ) : (
                    patientData.city
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="patient_db_contact_picture">
          {patientData.pictureUrl && (
            <img src={patientData.pictureUrl} alt="Patient" />
          )}
        </div>
      </div>
      <div className="patient_db_contact_bot">
        {isEditing ? (
          <button className="patient_db_contact_save" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button
            className="patient_db_contact_edit"
            onClick={() => setIsEditing(true)}
          >
            Edit data
          </button>
        )}
        <Link to="/log_in/services/patients/db/dashboard">
          <button className="patient_db_contact_return">Return to base</button>
        </Link>
      </div>
    </div>
  );
}

export default Patient_db_address;
