import PropTypes from 'prop-types';
import { Delete } from './ElementList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/actions';

export const ElementListContact = ({ id, name, number,}) => { 
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id))
    return (
    <li>
        {name}: {number}
        <Delete
            type="button"
            onClick={handleDelete} >
            Delete
        </Delete>
    </li>
        );};

        
ElementListContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

};