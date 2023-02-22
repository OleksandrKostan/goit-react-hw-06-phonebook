import { ElementListContact } from 'components/ElementListContact/ElementListContact';
import propTypes from 'prop-types';
// import { Delete } from './ContactList.styled';

export const ContactList = ({ contacts, onClickDelete }) => (
  
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ElementListContact
        key={id}
          name={name}
          number={number}
          id={id}
          onClickDelete={onClickDelete}/>
        
        // <li key={id} >
        //   {contact.name}: {contact.number}
        //   <Delete
        //     type="button"
        //     onClick={() => deleteContacts(contact.id)} >
        //     Delete
        //   </Delete>
        // </li>
      ))}
    </ul>
 
);


ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onClickDelete: propTypes.func.isRequired,
};