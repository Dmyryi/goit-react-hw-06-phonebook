import React from 'react';
import PhoneBookForm from './PhoneBook/PhoneBookForm';
import PhoneBookList from './PhoneBook/PhoneBookList';
import Filter from './Filter';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../redux/myContacts/myContacts';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.myContacts.contacts);

  const visibleContacts = useSelector(state =>
    state.myContacts.contacts
      ? contacts.filter(contact =>
          contact.name
            .toLowerCase()
            .includes(state.myContacts.filter.toLowerCase())
        )
      : []
  );

  const deleteContactHandler = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <div
      style={{
        width: '300px',
        padding: '20px',
        display: 'block',
      }}
    >
      <PhoneBookForm />
      <Filter />
      <PhoneBookList
        visibleContacts={visibleContacts}
        onDeleteContact={deleteContactHandler}
      />
    </div>
  );
}

export default App;
