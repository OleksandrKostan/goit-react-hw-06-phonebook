import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
    contacts: [
      { id: 'id-1', name: 'Kostan Oleksandr', number: '097-79-17-366' },
      { id: 'id-2', name: 'Prokhaska Ruslana', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  
  const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
      addContact: {
        reducer(state, action) {
          return {
            ...state,
            contacts: [...state.contacts, action.payload],
          };
        },
        prepare(name, number) {
          return {
            payload: {
              id: nanoid(),
              name,
              number,
            },
          };
        },
      },
      deleteContact(state, action) {
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !== action.payload
          ),
        };
      },
    },
  });

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
