import { useState } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { Button } from './ContactForm.styled';
import { addContact } from 'Redux/actions';
import { getContacts } from 'Redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts) 
  const dispatch = useDispatch();

    
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const findContact = contacts.find(contact => contact.name.toLowerCase().includes(name.toLowerCase()));

    if (findContact) {
      alert(`${findContact.name} is already in contacts`)
      return findContact.name;
    }
    dispatch(addContact(name, number));
    setName('')
    setNumber('')
    form.reset();
  };
  
  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

return (<form onSubmit={handleSubmit}> <label >
Name <input type="text"
name="name"
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required
value={name}  
onChange={handleChange}
          /></label>
  <label> Number <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  value={number}     
  onChange={handleChange}
/>
        </label>
        <Button  type="submit">Add contact</Button>
      </form>);
    }
