import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";
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
    <div className={css.container}>
      <input
        type="text"
        value={nameFilter}
        onChange={handleChange}
        placeholder="Search contacts"
        className={css.input}
      />
    </div>
  );
};

export default SearchBox;
