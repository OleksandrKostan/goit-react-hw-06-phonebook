import propTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => (
  <div>
    <label>Find contacts by Name </label>
    <input
      type="text"
      name="filter"
      placeholder="Enter filter"
      value={filter}
      onChange={onChange}
    />
  </div>
);

Filter.propTypes = {
  filter: propTypes.string, 
  onChange: propTypes.func.isRequired,
};