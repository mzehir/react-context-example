import React from "react";
import { AuthProvider } from "./contexts/AuthContext";

import Form from "./sections/Form";
import UserInformationView from "./sections/UserInformationView";

import "./Global.css";

function App() {
  return (
    <AuthProvider>
      <Content />
    </AuthProvider>
  );
}

export default App;

function Content() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React-Contex</h1>

      <p>
        Bu react projesinde context mimarisinin oluşturulması ile ilgili basit
        bir örnek yapılmıştır. Bu proje singIn vs. gibi işlemleri göstermek için
        değil context mimarisini göstermek için yapılmıştır.
      </p>

      <p>
        Örnekte signIn ve signOut işlemleri AuthContext.js içerisinde
        oluşturulmuştur. Yine signIn methodu ile backennden gelebilecek datalar
        da aynı context dosyasında tutulmuştur.
      </p>

      <p>
        Form.js dosyasında Sign In butonuna tıklanırsa AuthContext dosyasında
        userState değişkenine kullanıcı bilgileri yazılır. Sign Out butonuna
        tıklanırsa bu kullanıcı bilgileri sıfırlanır.
      </p>

      <p>
        Böyle bir projenin yapılmasında temel maksat; örnek bir context yapısı
        oluşturmaktır.
      </p>

      <a
        style={{ display: "block", textAlign: "center" }}
        target="_blank"
        href="https://tr.legacy.reactjs.org/docs/context.html"
      >
        Konu ile ilgili daha detaylı bilgi için tıkla
      </a>

      <hr />

      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}
      >
        <div style={{ width: "50%" }}>
          <Form />
        </div>

        <div
          style={{
            borderRight: "1px solid white",
          }}
        />

        <div style={{ width: "50%" }}>
          <UserInformationView />
        </div>
      </div>
    </div>
  );
}
