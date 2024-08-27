import { Link, useNavigate } from "react-router-dom";
import Home_Catagory from "../Components/home_Catagory";

const Home = () => {
  const Navigate = useNavigate();

  const handleClick = () => {
    Navigate("/Recipes");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[url('./assets/logo.png')] bg-cover bg-center h-16 w-72 my-2">
        <></>
      </div>
      <div className="bg-red-500 w-screen h-10 flex items-center justify-start">
        <div className="flex items-center justify-center transition-color duration-500 hover:bg-white rounded-full px-4 mr-10 ml-20 h-5/6 ">
          <Link
            to={"/"}
            className=" font-semibold text-white text-lg hover:text-red-500 transition-color duration-500"
          >
            Home
          </Link>
        </div>
        <div className="flex items-center justify-center transition-color duration-500 hover:bg-white rounded-full px-4 mr-10 h-5/6">
          <Link
            to={"/Recipes"}
            className="font-semibold text-white text-lg hover:text-red-500 transition-color duration-500"
          >
            Recipes
          </Link>
        </div>
        <div className="flex items-center justify-center transition-color duration-500 hover:bg-white rounded-full px-4 mr-10 h-5/6">
          <Link
            to={"/"}
            className="font-semibold text-white text-lg hover:text-red-500 transition-color duration-500"
          >
            Login
          </Link>
        </div>
        <div className="flex items-center justify-center transition-color duration-500 hover:bg-white rounded-full px-4 mr-10 h-5/6">
          <Link
            to={"/signup"}
            className="font-semibold text-white text-lg hover:text-red-500 transition-color duration-500"
          >
            Signup
          </Link>
        </div>
      </div>
      <div className="bg-[url('./assets/headline.jpg')] bg-cover bg-top h-96 w-screen flex items-center justify-start">
        <div className="h-full w-2/5 text-wrap flex flex-col items-start justify-center ml-24">
          <h1 className="text-6xl font-bold text-white leading-tight">
            FOOD AND HEALTH IN SAME PLATE
          </h1>
          <button
            onClick={handleClick}
            className="border-white border-2 bg-black bg-opacity-20 rounded-full mt-2 ml-1 w-1/5 py-2 text-white font-bold active:scale-95"
          >
            All Recipes
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-3xl font-bold text-red-500 mt-7 ml-7">PAKISTANI</h1>
        <Home_Catagory cuisine={"Pakistani"} />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-3xl font-bold text-red-500 mt-7 ml-7">Italian</h1>
        <Home_Catagory cuisine={"Italian"} />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-3xl font-bold text-red-500 mt-7 ml-7">American</h1>
        <Home_Catagory cuisine={"American"} />
      </div>
    </div>
  );
};

export default Home;
