import { combineReducers } from 'redux';

const contactsInitialState = {
  contacts: [
    { id: 'id-1', name: 'Kostan Oleksandr', number: '097-79-17-366' },
    { id: 'id-2', name: 'Prokhaska Ruslana', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const filtersInitialState = {
  filters: '',
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/contactFilter':
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});