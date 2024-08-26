const Category = (props) => {
  return (
    <div className="flex flex-col items-center justify-between h-auto w-80">
      <h2
        onClick={props.clickhandler}
        className="text-white font-bold text-base mb-3"
      >
        Recipe Name: {props.name || props.title}
      </h2>
      <img
        onClick={props.clickhandler}
        src={props.image || props.photoUrl}
        className="h-72 w-72 rounded-lg"
      />
      {props.cuisine?.length > 0 ? (
        <h3 className="text-white font-bold text-base mt-3">
          Cuisine: {props.cuisine}
        </h3>
      ) : (
        <></>
      )}
      <h3 className="text-white font-bold text-base mt-2">
        Serving: {props.servings}
      </h3>
      <button
        onClick={props.clickhandler}
        className="text-red-500 font-bold text-xl bg-white rounded-3xl h-10 w-80 mt-3 mb-1 active:scale-90"
      >
        Detailed Recipe
      </button>
    </div>
  );
};

export default Category;
