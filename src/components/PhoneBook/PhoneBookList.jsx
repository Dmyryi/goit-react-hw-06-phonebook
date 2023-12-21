import React from 'react';
import { deleteContacts } from '../../redux/myContacts/myContacts';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/selectors/selectors';

export default function PhoneBookList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {contacts.map(item => (
          <li key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
            <button onClick={() => dispatch(deleteContacts(item.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
