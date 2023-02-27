import useLocalStorage from 'components/Hooks/useLocalStorage';



import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';

import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');




  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = contacts.find(contact => contact.name.toLowerCase().includes(name.toLowerCase()));

    if (findContact) {
      alert(`${findContact.name} is already in contacts`)
      return findContact.name;
    } else {
      setContacts([contact, ...contacts],
      );
    };
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContacts = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId),
    );
  };


  return (<> <ThemeProvider theme={theme}> <GlobalStyle />
    <h1>Phonebook</h1>
    <ContactForm onSubmit={addContact} />
    <h2>Contacts</h2>
    <Filter value={filter} onChange={changeFilter} />
    <ContactList contacts={getFilteredContacts()}
      onClickDelete={deleteContacts} />
  </ThemeProvider> </>
  );

}