import OperatingSystem from "./OperatingSystem.jsx";
import RamSection from "./RamSection.jsx";
import PriceSec from "./PriceSec.jsx";
import SearchFilter from "./SearchFilter.jsx";

function Filters() {
  return (
    <div className="w-full  md:w-1/3  bg-white rounded-md h-full">
      <div className="">
        <div className="text-xl font-semibold border-b-[1.5px] py-6 px-4 w-full">
          <h1>FIlters </h1>
        </div>

        <div className="flex flex-col">
              <SearchFilter />
              <PriceSec />

              <OperatingSystem />
              <RamSection />
        </div>
      </div>
    </div>
  );
}

export default Filters;
