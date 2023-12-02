import { createContext, useReducer } from "react";

const initialUserState = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  birthDate: "",
};

const UserStateReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
        phone: action.payload.phone,
        birthDate: action.payload.birthDate,
      };

    case "CLEAR":
      return {
        name: "",
        surname: "",
        email: "",
        phone: "",
        birthDate: "",
      };
    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [userState, userDispatch] = useReducer(
    UserStateReducer,
    initialUserState
  );

  /*
Buradaki values değerleri backendde gerekli servise ulaştırılmalıdır.
İşlem başarılı ise servisten gelen veriler userState değişkenine userDispatch methodu ile set edilmelidir. 
*/
  const signIn = async (values) => {
    userDispatch({
      type: "SIGN_IN",
      payload: {
        ...values,
      },
    });

    // go to dashboad || userProfilePage...
  };

  /*
Burada backendde gerekli servis çalıştırılmalıdır.
İşlem başarılı ise servisten gelen başarılı yanıtına göre userDispatch methodu ile userState değerleri silinmelidir.
Daha sonra kullanıcı giriş sayfasına yönlendirilebilir. 
*/
  const signOut = async () => {
    userDispatch({
      type: "CLEAR",
    });

    // go to => loginPage...
  };

  return (
    <AuthContext.Provider
      value={{
        ...userState,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
