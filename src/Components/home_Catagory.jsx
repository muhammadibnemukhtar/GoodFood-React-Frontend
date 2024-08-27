import { useContext } from "react";
import AuthContext from "../Context/makeContext";

const Home_Catagory = (props) => {
  const { catagory } = useContext(AuthContext);

  const catagoryFilter = catagory.filter((element) => {
    if (element.cuisine === props.cuisine) {
      return true;
    }
  });

  console.log(catagoryFilter);

  return (
    <>
      <div className="grid grid-cols-4 gap-10 mx-7 my-4">
        {catagoryFilter.map((element) => {
          return element.image || element.photoUrl ? (
            <div className="flex items-center justify-evenly h-96 w-64">
              <div className="flex flex-col items-center justify-center bg-red-500 rounded-2xl p-3 h-full w-full hover:scale-105 transition-transform duration-500">
                <h1 className="font-semibold text-sm text-white mb-2 truncate max-w-full pb-1 px-2">
                  {element.name || element.title}
                </h1>
                <div
                  className="w-60 h-96 flex items-center justify-center rounded-xl"
                  style={{
                    backgroundImage: `url(${
                      element.image || element.photoUrl
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h2 className="text-white text-sm font-semibold mt-2">
                  Cuisine: {element.cuisine}
                </h2>
                <h2 className="text-white text-sm font-semibold m-2">
                  Serving: {element.servings}
                </h2>
                <button className="text-red-500 bg-white font-semibold rounded-3xl h-1/6 w-full">
                  Detail
                </button>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </>
  );
};

export default Home_Catagory;
