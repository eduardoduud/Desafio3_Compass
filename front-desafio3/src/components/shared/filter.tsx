import { useState } from "react";
import { getIconPath } from "../utils/getIcon";
import { HiOutlineX } from "react-icons/hi";
import { FilterProps } from "../../types/filterProps";
import { useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Filter: React.FC<{
  categoryOptions: { name: string; category: number }[];
  onFiltersChange: (filters: FilterProps) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  totalItems: number;
}> = ({
  categoryOptions,
  onFiltersChange,
  onItemsPerPageChange,
  totalItems,
}) => {
  const [isFilterDropdownVisible, setFilterDropdownVisible] = useState(false);
  const location = useLocation();
  const initialCategory = location.state?.category || [];
  const [filters, setFilters] = useState<FilterProps>({
    offset: 0,
    sortOrder: "asc",
    category: initialCategory ? [initialCategory] : [],
  });

  const [itemsPerPage, setItemsPerPage] = useState<number>(16);

  const toggleDropdown = () => {
    setFilterDropdownVisible(!isFilterDropdownVisible);
  };

  const handleDropdownFilterChange = (category: number) => {
    let updatedFilters = filters;
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters.category?.includes(category)
        ? prevFilters.category.filter((cat) => cat !== category)
        : [...prevFilters.category, category];

      updatedFilters = { ...prevFilters, category: updatedCategory };
      return updatedFilters;
    });
    onFiltersChange(updatedFilters);
  };

  const handleTotalItensChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
    onItemsPerPageChange(itemsPerPage);
  };

  const handleSortOrderChange = (sortOrder: string) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, sortOrder };
      onFiltersChange(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <div className="bg-features h-100 flex flex-row items-center justify-between px-16">
      <div className="flex flex-row items-center gap-4">
        <img src={getIconPath("filterToggle")} alt="" />
        <span className="cursor-pointer" onClick={toggleDropdown}>
          Filter
        </span>
        <img src={getIconPath("filterDots")} alt="" />
        <img src={getIconPath("filterIdk")} alt="" />
        <hr className="h-9" />
        <span>
          Showing 1-{itemsPerPage} of {totalItems} results
        </span>
      </div>
      {/* Dropdown para filtros */}
      {isFilterDropdownVisible && (
        <div className="absolute z-10 mt-2 w-64 rounded bg-white p-4 shadow-lg">
          <HiOutlineX
            className="absolute right-2 top-2"
            onClick={toggleDropdown}
          />
          <h3 className="p-2 font-semibold">Select Filters</h3>
          {categoryOptions.map((option) => (
            <label
              key={option.category}
              className="mb-2 flex items-center gap-2"
            >
              <input
                type="checkbox"
                checked={filters.category.includes(option.category)}
                onChange={() => handleDropdownFilterChange(option.category)}
                className="h-5 w-5 border border-solid border-gray-300"
              />
              <span>{option.name}</span>
            </label>
          ))}
        </div>
      )}
      <div className="flex flex-row items-center justify-end gap-4">
        <span id="show">Show</span>
        <Tooltip anchorSelect="#show" content="Min: 10" />
        <Tooltip anchorSelect="#showInputField" content="Min: 10" />
        <input
          className="h-55 w-55 border-none bg-white text-center"
          type="number"
          id="showInputField"
          value={itemsPerPage}
          onChange={(e) => {
            if (parseInt(e.target.value) >= 10) {
              handleTotalItensChange(parseInt(e.target.value));
            }
          }}
        />
        <span>Sort by</span>
        <label key="sortOrder" className="">
          <select
            onChange={(e) => handleSortOrderChange(e.target.value)}
            className="h-55 w-auto border-none p-4"
            name="sortOrder"
            id="sortOrder"
          >
            <option value="asc">Ascendent</option>
            <option value="desc">Descendent</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filter;
