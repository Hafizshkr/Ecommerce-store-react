
const CategoryFilter = () => {
  return (
    <>
      <div className="flex flex-col  mt-6 lg:ml-[150px] md:ml-[100px] sm:ml-[50px]  border  h-[900px] ">
        <div className="border-b w-full sm:pl-1 lg:pl-3 xl:pl-5 md:pl-5 py-5 px-5">
          <span className="font-bold">FILTER</span>
        </div>
        <div className="sm:pl-1 lg:pl-3 xl:pl-5 md:pl-5 py-1 px-5 pt-2">
        <form action="">
          <div className="flex flex-col ">
            <h1 className="pb-3 text-xl font-semibold">Categories</h1>
            <label>
              <input
                type="radio"
                id="All"
                name="radio"
                // checked={selectedCategory === ""}
                // onChange={() => handleCategory("")}
              />
              <span className="ml-2">All</span>
            </label>
            <label>
              <input
                type="radio"
                id="smartphone"
                name="radio"
                // checked={selectedCategory === "smartphones"}
                // onChange={() => handleCategory("smartphones")}
              />
              <span className="ml-2">Smartphone</span>
            </label>
            <label>
              <input
                type="radio"
                id="laptop"
                name="radio"
                // checked={selectedCategory === "laptops"}
                // onChange={() => handleCategory("laptops")}
              />
              <span className="ml-2">Laptop</span>
            </label>
            <label>
              <input
                type="radio"
                id="skincare"
                name="radio"
                // checked={selectedCategory === "skincare"}
                // onChange={() => handleCategory("skincare")}
              />
              <span className="ml-2">Skincare</span>
            </label>
            <label>
              <input
                type="radio"
                id="grocery"
                name="radio"
                // checked={selectedCategory === "groceries"}
                // onChange={() => handleCategory("groceries")}
              />
              <span className="ml-2">Grocery</span>
            </label>
            <label>
              <input
                type="radio"
                id="homedeco"
                name="radio"
                // checked={selectedCategory === "home-decoration"}
                // onChange={() => handleCategory("home-decoration")}
              />
              <span className="ml-2">Home-decoraction</span>
            </label>
            <label>
              <input
                type="radio"
                id="fragrance"
                name="radio"
                // checked={selectedCategory === "fragrances"}
                // onChange={() => handleCategory("fragrances")}
              />
              <span className="ml-2">Fragrance</span>
            </label>
          </div>
        </form>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
