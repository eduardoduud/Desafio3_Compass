import { useState } from "react";
import { getIconPath } from "../utils/getIcon";
import { RxDividerVertical } from "react-icons/rx";
import { HiOutlineX } from "react-icons/hi";
import { FilterProps } from "../../types/filterProps";
import { useLocation } from "react-router-dom";

const Filter: React.FC<{
  categoryOptions: { name: string; category: number }[];
  onFiltersChange: (filters: FilterProps) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}> = ({ categoryOptions, onFiltersChange, onItemsPerPageChange }) => {
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
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters.category?.includes(category)
        ? prevFilters.category.filter((cat) => cat !== category)
        : [...prevFilters.category, category];

      const updatedFilters = { ...prevFilters, category: updatedCategory };
      onFiltersChange(updatedFilters);
      return updatedFilters;
    });
  };

  const handleTotalItensChange = (limit: number) => {
    setItemsPerPage(limit);
    onItemsPerPageChange(itemsPerPage);
  };

  const handleSortOrderChange = (sortOrder: string) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters, sortOrder };
      onFiltersChange(updatedFilters);
      return updatedFilters;
    });
  };

  const handleApplyFilters = () => {
    onFiltersChange(filters);
  };

  return (
    <div className="bg-features h-100 flex flex-row items-center justify-between px-16">
      <div className="flex flex-row gap-4">
        <img src={getIconPath("filterToggle")} alt="" />
        <span className="cursor-pointer" onClick={toggleDropdown}>
          Filter
        </span>
        <img src={getIconPath("filterDots")} alt="" />
        <img src={getIconPath("filterIdk")} alt="" />
        <RxDividerVertical />
        <span>Showing 1-16 of 32 results</span>
      </div>
      {/* Dropdown para filtros */}
      {isFilterDropdownVisible && (
        <div className="absolute z-10 mt-2 w-64 rounded bg-white p-4 shadow-lg">
          <HiOutlineX onClick={toggleDropdown} />
          <h3 className="mb-2 font-semibold">Select Filters</h3>
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
          <button
            className="bg-button flex items-center justify-center rounded-lg border-solid border-none bg-gray-300"
            onClick={() => handleApplyFilters()}
          >
            <span>Apply Filters</span>
          </button>
        </div>
      )}
      <div className="flex flex-row items-center justify-end gap-4">
        <span>Show</span>
        <input
          className="h-55 w-55 bg-white text-center"
          type="number"
          value={itemsPerPage}
          onChange={(e) => handleTotalItensChange(parseInt(e.target.value))}
        />
        <span>Sort by</span>
        <label key="sortOrder" className="">
          <select
            onChange={(e) => handleSortOrderChange(e.target.value)}
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
