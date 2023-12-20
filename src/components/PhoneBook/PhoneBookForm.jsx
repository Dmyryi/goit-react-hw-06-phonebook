import React from 'react';
import styles from './PhoneBookForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from '../../redux/myContacts/myContacts';
import { nanoid } from 'nanoid';
import { nameUsers, numberUsers } from '../../redux/myUsers/myUsers';

export default function PhoneBookForm(props) {
  const dispatch = useDispatch();
  const name = useSelector(state => state.myUsers.name);
  const number = useSelector(state => state.myUsers.number);

  const handleChangeName = evt => {
    dispatch(nameUsers(evt.currentTarget.value));
  };

  const handleChangeNumber = evt => {
    dispatch(numberUsers(evt.currentTarget.value));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // props.onSubmit(name, number);
    dispatch(addContacts({ id: nanoid(), name, number }));
    reset();
  };

  const reset = () => {
    dispatch(nameUsers(''));
    dispatch(numberUsers(''));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label class={styles.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          required
        />
      </label>
      <label class={styles.label}>
        Number
        <input
          type="tel    "
          name="number"
          value={number}
          onChange={handleChangeNumber}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}
