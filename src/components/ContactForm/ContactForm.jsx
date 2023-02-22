import PropTypes from 'prop-types';

import  { useState} from 'react';
import { nanoid } from 'nanoid';

import { Button } from './ContactForm.styled';

export default function ContactForm ({onSubmit}) {

  const[name, setName] = useState('');
  const[number, setNumber] = useState('');
 

 const nameId = nanoid();
 const numberId = nanoid();
    
  const handleInputChange = e => {
    const{ name, value}= e.target
    switch (name) {
      case 'name':
       setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return
}
  };
    
  const handleSubmit = e => {
    e.preventDefault();
   onSubmit({ name, number });
    resetName();
    resetNumber();
  };
 
const resetName = () => {
    setName('')  
  };
  const resetNumber = () => {
    setNumber('')
  };
   
        return (<form onSubmit={handleSubmit}> <label htmlFor={nameId}>
        Name <input type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
            onChange={handleInputChange}
          id={nameId}/></label>
        <label htmlFor={numberId}>
        Number <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
              onChange={handleInputChange}
              id={numberId}
/>
        </label>
        <Button  type="submit" disabled={!name || !number} >
        Add contact
      </Button>
      </form>);
    }
 
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};