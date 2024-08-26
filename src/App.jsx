import Recipes from "./Pages/Recipes";
import Error from "./Pages/Error";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RecepieDetail from "./Pages/RecipeDetails";
import AuthProvider from "./Context/contextProvider";
import Login from "./Pages/login";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="*" element={<Error />} />
          <Route path="/RecipeDetail/:id?" element={<RecepieDetail />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
