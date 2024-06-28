import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectFilter, changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectFilter);

  const handleSearchChange = (searchQuery) => {
    dispatch(changeFilter(searchQuery));
  };

  const handleChange = (event) => {
    handleSearchChange(event.target.value);
  };
  return (
    <input
      type="text"
      value={nameFilter}
      onChange={handleChange}
      placeholder="Search contacts"
      className={css.input}
    />
  );
};

export default SearchBox;
