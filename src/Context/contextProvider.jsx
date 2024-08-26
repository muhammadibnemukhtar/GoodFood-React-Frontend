import { useState } from "react";
import AuthContext from "./makeContext";

const AuthProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userDetails, setUserDetails] = useState([
    {
      userName: "muhammad",
      password: "12345",
      confirmPassword: "12345",
      email: "muhammadbabar3114@gmail.com",
      gender: "male",
    },
  ]);

  const login = () => {
    setIsLoggedin(true);
  };

  console.log(userDetails);
  const logout = () => {
    setIsLoggedin(false);
  };

  return (
    <>
      <AuthContext.Provider
        value={{ isLoggedin, login, logout, userDetails, setUserDetails }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
