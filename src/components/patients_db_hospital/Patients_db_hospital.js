import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Patients_db_hospital.css";
import { Link, useParams } from "react-router-dom";

function Patient_db_hospital() {
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
  }, [pesel]);

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
            to={`/log_in/services/patients/db/address/${patientData.pesel}`}
          >
            <button className="patient_data2">Patient data</button>
          </Link>
          <Link
            to={`/log_in/services/patients/db/address/${patientData.pesel}`}
          >
            <button className="patient_addresses">Addresses</button>
          </Link>
          <Link
            to={`/log_in/services/patients/db/history/${patientData.pesel}`}
          >
            <button className="patient_history">Medical history</button>
          </Link>
          <button className="patient_doctor2">Assigned doctor/hospital</button>
        </div>
      </div>
      <div className="patient_db_contact_mid">
        <div className="patient_db_contact_left">
          <table>
            <tbody>
              <div className="type2">Assigned hospital: </div>
              <div className="patient_contact2">Assigned doctor: </div>
              <line className="main_line" />
              <line className="submain_line1" />
              <line className="submain_line2" />
              <line className="submain_line3" />
              <tr className="patient_db_phone">
                <td className="patient_db_phone2">
                  {isEditing ? (
                    <input
                      type="text"
                      name="hospital"
                      value={patientData.hospital}
                      onChange={handleChange}
                    />
                  ) : (
                    patientData.hospital
                  )}
                </td>
              </tr>
              <tr className="patient_db_email10">
                <td className="patient_db_email11">
                  {isEditing ? (
                    <input
                      type="text"
                      name="doctor"
                      value={patientData.doctor}
                      onChange={handleChange}
                    />
                  ) : (
                    patientData.doctor
                  )}
                </td>
              </tr>
            </tbody>
          </table>
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

export default Patient_db_hospital;
