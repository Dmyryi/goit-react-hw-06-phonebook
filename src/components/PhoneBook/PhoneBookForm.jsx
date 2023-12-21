import React, { useState } from 'react';
import styles from './PhoneBookForm.module.css';

import { getVisibleContacts } from '../../redux/selectors/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from '../../redux/myContacts/myContacts';
import { nanoid } from 'nanoid';

export default function PhoneBookForm() {
  const dispatch = useDispatch();

  const contacts = useSelector(getVisibleContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = evt => {
    setName(evt.currentTarget.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const normalizedName = name.toLowerCase();
    const isAdded = contacts.find(
      el => el.name.toLowerCase() === normalizedName
    );

    if (isAdded) {
      alert(`${name}: is already in contacts`);
      return;
    }
    dispatch(addContacts({ id: nanoid(), name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
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
