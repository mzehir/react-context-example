import React from "react";
import AuthUseContext from "../hooks/AuthUseContext";

const Form = () => {
  const { signIn, signOut } = AuthUseContext();

  const userInformation = {
    name: "Mümin",
    surname: "Zehir",
    email: "zehir.m.54@gmail.com",
    phone: "0 541 952 5920",
    birthDate: "14/02/1992",
  };

  return (
    <>
      <h4 style={{textAlign:"center"}}>Context içerisinde oluşturulmuş methodu kullanma</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <button
          onClick={() => {
            signIn(userInformation);
          }}
        >
          Sign In
        </button>

        <button
          onClick={() => {
            signOut(userInformation);
          }}
        >
          Sign Out
        </button>
      </div>
    </>
  );
};

export default Form;
