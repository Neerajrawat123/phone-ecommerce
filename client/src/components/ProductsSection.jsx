import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { FiltersContext } from "../context/FilterContext";

function ProductsSection() {
  const [sortingValue, setSortingValue] = useState("low-to-high");
  const [mobilesData, setMobilesData] = useState([]);
  const { filters } = useContext(FiltersContext);
  // const products = getData()

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/data");
      filteredData(response.data.mobiles);
    };

    getData();
  }, [filters, sortingValue]);

  const filteredData = (mobiles) => {
    let filteredMobiles = mobiles;

    for (const key in filters) {
      console.log(typeof filters[key]);

      if (filters[key].length > 0) {
        filteredMobiles = filteredMobiles.filter((mobile) => {
          let property = mobile[key];
          return (
            filters[key].indexOf(property) != -1 ||
            Number(filters[key]) <= Number(property)
          );
        });
      }
    }
    filteredMobiles = sortData(filteredMobiles);
    setMobilesData(filteredMobiles);
  };

  const handleClick = (ev) => {
    setSortingValue(ev.target.value);
  };

  const sortData = (data) => {
    if (sortingValue == "high-to-low") {
      return data.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return data.sort((a, b) => Number(a.price) - Number(b.price));
  };

  const getClasses = (type) => {
    return type == sortingValue ? "border-b-2 border-blue-700" : "";
  };

  return (
    <div className="bg-white w-full">
      <div className=" py-5">
        <div className="flex gap-6 border-b-[1px] md:pb-4 md:px-4">
          <span className="font-semibold">Sort by</span>
          <div className="flex gap-4 font-[450]">
            <button
              className={getClasses("low-to-high")}
              onClick={handleClick}
              value="low-to-high"
            >
              Price low-to-high
            </button>
            <button
              className={getClasses("high-to-low")}
              onClick={handleClick}
              value="high-to-low"
            >
              Price low-to-high
            </button>
          </div>
        </div>

        <div className="">
          {mobilesData.length > 0 ? (mobilesData.map((mobile, Index) => (
            <ProductCard key={Index} data={mobile} />
          ))) : (
            <div className="text-3xl w-full flex  justify-center py-11"> 
            <div>
              No phones
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsSection;
