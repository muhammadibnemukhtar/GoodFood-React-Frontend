import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RecepieDetail = () => {
  const [detail, setDetail] = useState({});
  const pram = useParams();
  const id = parseInt(pram.id, 10);
  console.log(id);

  const detailedProduct = async () => {
    if (pram.id.toLowerCase().includes("b")) {
      const response = await axios.get(
        `https://api.sampleapis.com/recipes/recipes/${id}`
      );
      console.log(response);
      setDetail(response);
    } else if (pram.id.toLowerCase().includes("a")) {
      const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
      console.log(response);
      setDetail(response);
    }
  };

  useEffect(() => {
    detailedProduct();
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[url('./assets/details_bg.jpg')] bg-cover shadow-lg bg-center overflow-auto">
      {detail.data ? (
        <div className="flex flex-col justify-evenly bg-red-500 w-4/6 h-auto rounded-3xl py-7 mt-28 scale-75">
          {/* <h1 className="text-white font-bold text-5xl">Detail Page</h1> */}
          <h2 className="text-white font-bold text-4xl text-center mb-7">
            {detail.data.name || detail.data.title}
          </h2>
          <img
            className="w-full max-h-96 object-cover "
            src={detail.data.image || detail.data.photoUrl}
          />
          {detail.data.cuisine?.length > 0 ? (
            <h3 className="text-white font-bold text-2xl m-2 mt-7 px-5">
              Cuisine:{" "}
              <h4 className="font-normal inline">{detail.data.cuisine}</h4>
            </h3>
          ) : (
            <></>
          )}
          {detail.data.difficulty ? (
            <h3 className="text-white font-bold text-2xl m-2 px-5">
              Dificulty:{" "}
              <h4 className="font-normal inline">{detail.data.difficulty}</h4>
            </h3>
          ) : (
            <></>
          )}
          <h3 className="text-white font-bold text-2xl m-2 mt-4 px-5">
            Serving:{" "}
            <h4 className="font-normal inline">{detail.data.servings}</h4>
          </h3>
          <h3 className="text-white font-bold text-xl m-2 px-5">
            Ingredients:{" "}
            <h4 className="font-normal inline">{detail.data.ingredients}</h4>
          </h3>
          <h3 className="text-white font-bold text-xl m-2 px-5">
            Instructions:{" "}
            <h4 className="font-normal inline">
              {detail.data.instructions || detail.data.directions}
            </h4>
          </h3>
        </div>
      ) : (
        <h1 className="font-bold text-8xl">Invalid Recipe ID</h1>
      )}
    </div>
  );
};

export default RecepieDetail;
