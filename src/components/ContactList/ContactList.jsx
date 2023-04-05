import { ElementListContact } from 'components/ElementListContact/ElementListContact';
import { useSelector } from "react-redux";
import { getContacts, getFilters } from 'Redux/selectors';

export const ContactList = () => { 

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilters);
  
    const visibleContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  
    return (
      <ul>
      {visibleContacts.map(({ name, number, id }) => (
        <ElementListContact
        key={id}
          name={name}
          number={number}
          id={id}
          />
      ))}
    </ul>
    );
  };