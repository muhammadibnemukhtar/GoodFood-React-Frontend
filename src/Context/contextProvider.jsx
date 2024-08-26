import { useEffect, useState } from "react";
import AuthContext from "./makeContext";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [catagory, setcatagory] = useState([]);
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

  const catagories = async () => {
    const response = await axios.get("https://dummyjson.com/recipes");
    const response2 = await axios.get(
      "https://api.sampleapis.com/recipes/recipes"
    );
    // console.log(response.data);
    // console.log(response2.data);
    const allRecipes = [...response.data.recipes, ...response2.data];
    let counter_A = 1;
    response.data.recipes.map((element) => {
      element.newID = counter_A++ + "A";
    });

    let counter_B = 1;
    response2.data.map((element) => {
      element.newID = counter_B++ + "B";
    });

    console.log(allRecipes);
    setcatagory(allRecipes);
  };

  useEffect(() => {
    catagories();
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedin,
          login,
          logout,
          userDetails,
          setUserDetails,
          catagory,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
