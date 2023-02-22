import PropTypes from 'prop-types';
import { Delete } from './ElementList.styled';

export const ElementListContact = ({ id, name, number, onClickDelete }) => (
    <li>
        {name}: {number}
        <Delete
            type="button"
            onClick={() => onClickDelete(id)} >
            Delete
        </Delete>
    </li>
);
ElementListContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};