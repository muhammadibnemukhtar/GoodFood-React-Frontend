import Category from "../Components/Category";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const [catagory, setcatagory] = useState([]);
  const [filteredItems, setFilter] = useState([]);
  const navigate = useNavigate();

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
    setFilter(allRecipes);
  };

  const changeHandle = (e) => {
    const filtered = catagory.filter((element) => {
      if (
        ["name", "title", "cuisine", "servings"].some((key) =>
          element[key]
            ? element[key]
                .toString()
                .toLowerCase()
                .includes(e.target.value.toLowerCase())
            : false
        )
      ) {
        return true;
      }
    });
    console.log(filtered);
    setFilter(filtered);
  };

  useEffect(() => {
    catagories();
  }, []);

  return (
    <div className="bg-[url('./assets/recipe_bg.jpg')] bg-cover w-screen h-screen bg-fixed overflow-auto">
      <div className="flex flex-col items-center justify-between pt-10 ">
        <h1 className="text-red-500 font-bold text-6xl text-center">
          List of Recepies
        </h1>
        <input
          onChange={changeHandle}
          placeholder="Search Recipe, Cuisine or Servings"
          type="text"
          className="text-white placeholder-white font-semibold text-xl h-15 focus:outline-none border-none w-1/2 md:w-1/2  lg:w-1/2 py-4 px-6 mt-10 bg-red-500 rounded-full items-center"
        />
        <img src="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  m-5 ">
        {filteredItems.map((element) => {
          return (
            <div className="m-5 bg-red-500 transition-transform transform hover:scale-105 mx-auto p-4 rounded-2xl">
              <Category
                className="flex flex-col items-center justify-center"
                name={element.name || element.title}
                image={element.image || element.photoUrl}
                cuisine={element.cuisine.length > 0 ? element.cuisine : null}
                servings={element.servings}
                key={element.newID}
                clickhandler={() => {
                  navigate("/RecipeDetail/" + element.newID);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recipes;
