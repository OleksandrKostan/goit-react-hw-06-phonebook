
import { useDispatch, useSelector } from 'react-redux';
import { getFilters } from 'Redux/selectors';
import { contactFilter } from 'Redux/actions';

export const Filter = () => {    
 
  const filter = useSelector(getFilters);

  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(contactFilter(e.currentTarget.value))
  };

  return(<div>
    <label>Find contacts by Name </label>
    <input
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={changeFilter}
    />
  </div>
);}

