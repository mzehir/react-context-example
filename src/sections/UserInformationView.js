import React from "react";
import AuthUseContext from "../hooks/AuthUseContext";

const UserInformationView = () => {
  const { name, surname, email, phone, birthDate } = AuthUseContext();
  return (
    <>
      <h4 style={{ textAlign: "center" }}>
        Context içerisinde yazılmış değişkenleri kullanma
      </h4>

      <div style={{ textAlign: "center" }}>
        <p>Username: {name}</p>
        <p>Surname: {surname}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Birth Date: {birthDate}</p>
      </div>
    </>
  );
};

export default UserInformationView;
