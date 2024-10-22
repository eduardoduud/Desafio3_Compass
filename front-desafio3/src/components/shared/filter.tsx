import { getIconPath } from "../utils/getIcon";
import { RxDividerVertical } from "react-icons/rx";

const Filter: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center bg-features px-16 h-100">
      <div className="flex flex-row gap-4">
        <img src={getIconPath("filterToggle")} alt="" />
        <span>Filter</span>
        <img src={getIconPath("filterDots")} alt="" />
        <img src={getIconPath("filterIdk")} alt="" />
        <RxDividerVertical />
        <span>Showing 1-16 of 32 results</span>
      </div>
      <div className="flex flex-row items-center justify-end gap-4">
        <span>Show</span>
        <input
          className="bg-white text-center h-55 w-55"
          type="number"
          placeholder="16"
        />
        <span>Short by</span>
        <input
          className="bg-white text-center h-55 w-188"
          type="text"
          placeholder="Default"
        />
      </div>
    </div>
  );
};

export default Filter;
